const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

const sourceDirectory = path.resolve(__dirname, "../src");
const compiled = new Map();
const plain = (value) => JSON.parse(JSON.stringify(value));

function freeze(value) {
  if (value && typeof value === "object") {
    Object.values(value).forEach(freeze);
    Object.freeze(value);
  }
  return value;
}

function template(strings, ...values) {
  return { strings, values };
}

function markup(value) {
  if (value == null || typeof value === "function") return "";
  if (Array.isArray(value)) return value.map(markup).join("");
  if (value.strings) {
    return value.strings.reduce((text, part, index) =>
      text + part + markup(value.values[index]), "");
  }
  return String(value);
}

// Mock only browser/Lit boundaries; execute the actual compiled card and editor.
function runtime() {
  const registry = new Map();
  const modules = new Map();
  const timers = new Map();
  let now = 0;
  let nextTimer = 0;
  const schedule = (callback, delay, interval = 0) => {
    const id = ++nextTimer;
    timers.set(id, { callback, at: now + delay, interval });
    return id;
  };
  class Element extends EventTarget {
    requestUpdate() {}
    firstUpdated() {}
  }
  class CustomEventMock extends Event {
    constructor(type, options) {
      super(type, options);
      this.detail = options.detail;
    }
  }
  const customElements = {
    define: (tag, element) => registry.set(tag, element),
    get: (tag) => registry.get(tag),
  };
  const context = vm.createContext({
    console: { info() {}, warn() {} },
    window: {},
    customElements,
    CustomEvent: CustomEventMock,
    setTimeout: (callback, delay) => schedule(callback, delay),
    setInterval: (callback, delay) => schedule(callback, delay, delay),
    clearTimeout: (id) => timers.delete(id),
    clearInterval: (id) => timers.delete(id),
  });
  function load(filename) {
    const absolute = path.resolve(sourceDirectory, filename);
    if (modules.has(absolute)) return modules.get(absolute).exports;
    if (!compiled.has(absolute)) {
      compiled.set(absolute, ts.transpileModule(fs.readFileSync(absolute, "utf8"), {
        compilerOptions: {
          target: ts.ScriptTarget.ES2020,
          module: ts.ModuleKind.CommonJS,
          experimentalDecorators: true,
        },
      }).outputText);
    }
    const module = { exports: {} };
    modules.set(absolute, module);
    const requireMock = (name) => {
      if (name === "lit") return { LitElement: Element, html: template, css: template };
      if (name === "lit/decorators.js") {
        return { customElement: (tag) => (element) => {
          customElements.define(tag, element);
          return element;
        } };
      }
      if (name.startsWith(".")) {
        return load(path.relative(sourceDirectory, path.resolve(path.dirname(absolute), name + ".ts")));
      }
      throw new Error("Unexpected runtime dependency: " + name);
    };
    vm.runInContext("(function(require, module, exports) {\n" +
      compiled.get(absolute) + "\n})", context, { filename: absolute })(
      requireMock, module, module.exports);
    return module.exports;
  }
  load("lg-remote-control.ts");
  return {
    Card: registry.get("lg-remote-control"),
    Editor: registry.get("lg-remote-control-editor"),
    names: load("entity-name.ts"),
    customElements,
    advance(milliseconds) {
      const end = now + milliseconds;
      while (true) {
        const pending = [...timers.entries()].filter(([, timer]) => timer.at <= end)
          .sort((a, b) => a[1].at - b[1].at)[0];
        if (!pending) break;
        const [id, timer] = pending;
        now = timer.at;
        if (timer.interval) timer.at += timer.interval;
        else timers.delete(id);
        timer.callback();
      }
      now = end;
    },
  };
}

function fixture(config = {}) {
  const app = runtime();
  const calls = [];
  const tv = {
    entity_id: "media_player.tv",
    state: "on",
    attributes: {
      friendly_name: "Living room TV",
      sound_output: "tv_speaker",
      volume_level: 0.4,
      is_volume_muted: false,
      source: "HDMI 1",
      source_list: ["HDMI 1", "Netflix"],
    },
  };
  const hass = {
    config: { version: "2026.10.4" },
    states: {
      "media_player.tv": tv,
      "media_player.receiver": {
        entity_id: "media_player.receiver",
        attributes: { volume_level: 0.5, friendly_name: "Receiver" },
      },
    },
    entities: {
      "media_player.tv": { platform: "webostv" },
      "media_player.receiver": { platform: "denonavr" },
    },
    services: { media_player: { volume_up: {}, volume_down: {} } },
    callService: (...arguments_) => calls.push(arguments_),
  };
  const card = new app.Card();
  card.hass = hass;
  card.setConfig({ entity: "media_player.tv", ...config });
  return { ...app, card, hass, tv, calls };
}

function button(html, id) {
  const match = html.match(new RegExp('<button[^>]*id="' + id + '"[^>]*>[\\s\\S]*?</button>'));
  assert.ok(match, "Button " + id + " must be rendered");
  return match[0];
}

test("receiver removal is immutable, persisted and stops volume routing to the receiver", () => {
  const { Editor, card, hass, tv, calls } = fixture();
  const original = freeze({
    entity: "media_player.tv", av_receiver_family: "denonavr",
    ampli_entity: "media_player.receiver", keys: { PLAY: { icon: "mdi:play" } },
  });
  const editor = new Editor();
  editor.setConfig(original);
  let event;
  editor.addEventListener("config-changed", (changed) => event = changed);
  editor._erase_av_receiver();
  assert.equal(event.bubbles, true);
  assert.equal(event.composed, true);
  assert.notEqual(event.detail.config, original);
  assert.equal(original.ampli_entity, "media_player.receiver");
  assert.equal(event.detail.config.av_receiver_family, "");
  assert.equal(event.detail.config.ampli_entity, "");
  const reopened = new Editor();
  reopened.hass = hass;
  reopened.setConfig(plain(event.detail.config));
  assert.equal(reopened._config.av_receiver_family, "");
  assert.equal(reopened._config.ampli_entity, "");
  tv.attributes.sound_output = "external_arc";
  card.setConfig(event.detail.config);
  card.render();
  card.callServiceFromConfig("VOLUME_UP", "media_player.volume_up", {
    entity_id: card.output_entity,
  });
  assert.equal(calls[0][2].entity_id, "media_player.tv");
});

test("entity names use the new formatter, preserve strings and tolerate missing state", () => {
  const { names, hass } = fixture();
  const composed = [{ type: "area" }, { type: "text", text: "-" }, { type: "device" }];
  let arguments_;
  hass.formatEntityName = (...args) => { arguments_ = args; return "Living room - LG"; };
  assert.equal(names.computeEntityName(hass, "media_player.tv", composed), "Living room - LG");
  assert.equal(arguments_[0], hass.states["media_player.tv"]);
  assert.equal(arguments_[1], composed);
  hass.formatEntityName = () => { throw new Error("Must not format a plain override"); };
  assert.equal(names.computeEntityName(hass, "media_player.tv", "My TV"), "My TV");
  assert.equal(names.computeEntityName(hass, "media_player.missing"), "");
  assert.equal(names.computeEntityName(undefined, "media_player.tv"), "");
  assert.equal(names.computeEntityName({}, "media_player.tv"), "");
});

test("old HA versions and missing helpers fall back to friendly names", () => {
  const { names, hass } = fixture();
  hass.config.version = "2026.3.0";
  hass.formatEntityName = () => { throw new Error("Old signature must not be called"); };
  assert.equal(names.computeEntityName(hass, "media_player.tv", [{ type: "area" }]), "Living room TV");
  hass.config.version = "2026.4.0";
  delete hass.formatEntityName;
  assert.equal(names.computeEntityName(hass, "media_player.tv"), "Living room TV");
  hass.formatEntityName = (_state, name) => name === undefined ? "Default name" : "Unexpected";
  assert.equal(names.computeEntityName(hass, "media_player.tv", ""), "Default name");
});

test("name editor chooses the available control and saves or removes names immutably", () => {
  const { Editor, customElements, hass } = fixture();
  const editor = new Editor();
  editor.hass = hass;
  editor.setConfig(freeze({ entity: "media_player.tv", name: "Old name" }));
  assert.match(markup(editor.setRemoteName("Old name")), /<input/);
  hass.formatEntityName = () => "Living room";
  customElements.define("ha-selector", class {});
  assert.match(markup(editor.setRemoteName("Old name")), /<ha-selector/);
  const original = editor._config;
  let saved;
  editor.addEventListener("config-changed", (event) => saved = event.detail.config);
  const composed = [{ type: "area" }];
  editor.remoteNameChanged({ stopPropagation() {}, detail: { value: composed } });
  assert.equal(saved.name, composed);
  assert.equal(original.name, "Old name");
  editor.remoteNameChanged({ stopPropagation() {}, detail: { value: undefined } });
  assert.equal("name" in saved, false);
  hass.config.version = "2026.3.0";
  assert.match(markup(editor.setRemoteName(composed)), /<input/);
});

test("card titles remain optional and support both existing and structured names", () => {
  const { card, hass } = fixture();
  hass.formatEntityName = () => "Living room";
  assert.doesNotMatch(markup(card.render()), /class="tv_title"/);
  card.setConfig({ ...card.config, name: "My TV" });
  assert.match(markup(card.render()), />My TV<\/div>/);
  card.setConfig({ ...card.config, name: [{ type: "area" }] });
  assert.match(markup(card.render()), />Living room<\/div>/);
});

test("all entity dropdown labels use the formatter", () => {
  const { Editor, hass } = fixture();
  hass.formatEntityName = (state) => "Formatted " + state.entity_id;
  const editor = new Editor();
  editor.hass = hass;
  editor.setConfig({ entity: "media_player.tv", av_receiver_family: "denonavr",
    ampli_entity: "media_player.receiver" });
  assert.match(markup(editor.getLgTvEntityDropdown("media_player.tv")), /Formatted media_player\.tv/);
  assert.match(markup(editor.getMediaPlayerEntityDropdown("denonavr")), /Formatted media_player\.receiver/);
});

test("WoL keeps its default payload and forwards only configured options", () => {
  const { card, calls } = fixture({ mac: "00:11:22:33:44:55" });
  card._media_player_turn_on(card.config.mac);
  assert.deepEqual(plain(calls.pop()), ["wake_on_lan", "send_magic_packet", {
    mac: "00:11:22:33:44:55",
  }]);
  card.config = { ...card.config, broadcast_address: "192.168.20.255", broadcast_port: 7 };
  card._media_player_turn_on(card.config.mac);
  assert.deepEqual(plain(calls.pop()[2]), {
    mac: "00:11:22:33:44:55", broadcast_address: "192.168.20.255", broadcast_port: 7,
  });
  card.config = { ...card.config, broadcast_address: "", broadcast_port: "" };
  card._media_player_turn_on(card.config.mac);
  assert.deepEqual(plain(calls.pop()[2]), { mac: "00:11:22:33:44:55" });
  delete card.config.mac;
  card._media_player_turn_on(undefined);
  assert.deepEqual(plain(calls.pop()), ["media_player", "turn_on", { entity_id: "media_player.tv" }]);
});

test("absent, empty, icon-only and style-only overrides preserve the original command", () => {
  for (const override of [undefined, null, {}, { icon: "mdi:lamp" }, { style: "color: green;" },
    { service: "" }, { service: "  " }]) {
    const { card, calls } = fixture({ keys: { PLAY: override } });
    card._command("PLAY", "media.controls/play");
    assert.deepEqual(plain(calls[0]), ["webostv", "command", {
      entity_id: "media_player.tv", command: "media.controls/play",
    }]);
  }
  const { card, calls } = fixture();
  card._command("PLAY", "media.controls/play");
  assert.equal(calls[0][0], "webostv");
});

test("custom services receive only their configured data, including script calls without data", () => {
  const { card, calls } = fixture({ keys: {
    PLAY: { service: "media_player.volume_up", data: { entity_id: "media_player.receiver" } },
    STOP: { service: "script.stop_everything" },
  } });
  card._command("PLAY", "media.controls/play");
  assert.deepEqual(plain(calls[0]), ["media_player", "volume_up", { entity_id: "media_player.receiver" }]);
  card._command("STOP", "media.controls/stop");
  assert.equal(calls[1][0], "script");
  assert.equal(calls[1][1], "stop_everything");
  assert.equal(calls[1][2], undefined);
});

test("volume icons and styles belong to the real +/- buttons and preserve their shape", () => {
  const { card } = fixture({ keys: {
    VOLUME_UP: { icon: "mdi:lightbulb", style: "color: orange;" },
    VOLUME_DOWN: { icon: "mdi:lightbulb-off", style: "color: purple;" },
  } });
  const html = markup(card.render());
  const plus = button(html, "plusButton");
  const minus = button(html, "minusButton");
  assert.match(plus, /mdi:lightbulb"/);
  assert.match(plus, /color: orange;/);
  assert.match(plus, /border-radius: 50% 50% 0px 0px;/);
  assert.match(minus, /mdi:lightbulb-off/);
  assert.match(minus, /color: purple;/);
  assert.match(minus, /border-radius: 0px 0px 50% 50%;/);
  assert.equal((html.match(/mdi:lightbulb"/g) || []).length, 1);
  assert.match(html, /mdi:volume-high/);
  assert.match(html, /mdi:parking/);
});

test("every media button supports styles and the existing FAST_FOWARD key", () => {
  const keys = Object.fromEntries(["PLAY", "PAUSE", "STOP", "REWIND", "RECORD", "FAST_FOWARD"]
    .map((key) => [key, { icon: "mdi:test-" + key, style: "background: gold;" }]));
  const { card } = fixture({ keys });
  const buttons = markup(card.render()).match(/<button\b[\s\S]*?<\/button>/g);
  for (const key of Object.keys(keys)) {
    const rendered = buttons.find((html) => html.includes("mdi:test-" + key));
    assert.ok(rendered, key);
    assert.match(rendered, /style="[^"]*background: gold;/);
  }
  assert.equal(card._getButtonStyle("RECORD", "color: red;"), "color: red; background: gold;");
});

test("editor override additions, edits and deletions never mutate received config or nested data", () => {
  const { Editor } = fixture();
  const editor = new Editor();
  const original = freeze({ entity: "media_player.tv", keys: {
    PLAY: { service: "media_player.volume_mute", data: {
      entity_id: "media_player.receiver", is_volume_muted: true,
    } },
  } });
  editor.setConfig(original);
  let saved;
  editor.addEventListener("config-changed", (event) => saved = event.detail.config);
  editor._updateOverrideField("PLAY", "entity_id", "");
  assert.deepEqual(plain(saved.keys.PLAY.data), { is_volume_muted: true });
  assert.equal(original.keys.PLAY.data.entity_id, "media_player.receiver");
  editor._updateOverrideField("PLAY", "icon", "mdi:volume-high");
  assert.equal(original.keys.PLAY.icon, undefined);
  assert.equal(saved.keys.PLAY.icon, "mdi:volume-high");
  editor._onButtonSelect({ target: { value: "VOLUME_UP" } });
  assert.deepEqual(plain(saved.keys.VOLUME_UP), {});
  editor._deleteOverride("VOLUME_UP");
  editor._deleteOverride("PLAY");
  assert.equal("keys" in saved, false);
  const reopened = new Editor();
  reopened.setConfig(plain(saved));
  assert.equal("keys" in reopened._config, false);
});

test("volume clicks and holds keep using the configured services on mouse and touch", () => {
  for (const id of ["plusButton", "minusButton"]) {
    for (const input of [["mousedown", "mouseup"], ["touchstart", "touchend"]]) {
      const key = id === "plusButton" ? "VOLUME_UP" : "VOLUME_DOWN";
      const service = id === "plusButton" ? "volume_up" : "volume_down";
      const { card, calls, advance } = fixture({ keys: {
        [key]: { service: "media_player." + service, data: { entity_id: "media_player.receiver" } },
      } });
      const targets = { plusButton: new EventTarget(), minusButton: new EventTarget() };
      card.render();
      card.shadowRoot = { querySelector: (selector) => targets[selector.slice(1)] };
      card.firstUpdated(new Map());
      targets[id].dispatchEvent(new Event(input[0], { cancelable: true }));
      targets[id].dispatchEvent(new Event(input[1]));
      assert.equal(calls.length, 1);
      assert.deepEqual(plain(calls[0]), ["media_player", service, { entity_id: "media_player.receiver" }]);
      advance(600);
      calls.length = 0;
      targets[id].dispatchEvent(new Event(input[0], { cancelable: true }));
      advance(850);
      assert.ok(calls.length >= 3, id + " must repeat while held");
      targets[id].dispatchEvent(new Event(input[1]));
      const count = calls.length;
      advance(1000);
      assert.equal(calls.length, count, "Release must stop repeats");
      calls.forEach((call) => assert.deepEqual(plain(call), [
        "media_player", service, { entity_id: "media_player.receiver" },
      ]));
    }
  }
});
