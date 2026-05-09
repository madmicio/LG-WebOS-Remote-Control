// Create and register the card editor
import { customElement } from "lit/decorators.js";
import { html, css, LitElement } from "lit";

import { HomeAssistantFixed } from "./types";
import { EDITOR_CARD_TAG_NAME } from "./const";
import { getMediaPlayerEntitiesByPlatform } from "./utils";


const avreceivers = {
  "anthemav": {
    "friendlyName": "Anthem A/V Receivers",
  },
  "arcam_fmj": {
    "friendlyName": "Arcam FMJ Receivers",
  },
  "denonavr": {
    "friendlyName": "Denon, Marantz A/V Receivers",
  },
  "heos": {
    "friendlyName": "Denon heos A/V Receivers",
  },
  "harman_kardon_avr": {
    "friendlyName": "Harman Kardon AVR",
  },
  "monoprice": {
    "friendlyName": "Monoprice 6-Zone Amplifier",
  },
  "onkyo": {
    "friendlyName": "Onkyo A/V Receivers",
  },
  "sonos": {
    "friendlyName": "Sonos",
  },
  "pws66i": {
    "friendlyName": "Soundavo WS66i 6-Zone Amplifier",
  },
  "yamaha": {
    "friendlyName": "Yamaha Network Receivers",
  },
}

const AvReceiverdevicemap = new Map(Object.entries(avreceivers));

const OVERRIDEABLE_BUTTONS = [
  { key: "1", name: "1" },
  { key: "2", name: "2" },
  { key: "3", name: "3" },
  { key: "4", name: "4" },
  { key: "5", name: "5" },
  { key: "6", name: "6" },
  { key: "7", name: "7" },
  { key: "8", name: "8" },
  { key: "9", name: "9" },
  { key: "0", name: "0" },
  { key: "UP", name: "Up" },
  { key: "LEFT", name: "Left" },
  { key: "ENTER", name: "Enter/OK" },
  { key: "RIGHT", name: "Right" },
  { key: "BACK", name: "Back" },
  { key: "DOWN", name: "Down" },
  { key: "EXIT", name: "Exit" },
  { key: "RED", name: "Red" },
  { key: "GREEN", name: "Green" },
  { key: "YELLOW", name: "Yellow" },
  { key: "BLUE", name: "Blue" },
  { key: "HOME", name: "Home" },
  { key: "CHANNELUP", name: "Channel Up" },
  { key: "MUTE", name: "Mute" },
  { key: "INFO", name: "Info" },
  { key: "CHANNELDOWN", name: "Channel Down" },
  { key: "PLAY", name: "Play" },
  { key: "PAUSE", name: "Pause" },
  { key: "STOP", name: "Stop" },
  { key: "REWIND", name: "Rewind" },
  { key: "RECORD", name: "Record" },
  { key: "FAST_FOWARD", name: "Fast Forward" },
  { key: "POWER", name: "Power" },
  { key: "VOLUME_UP", name: "Volume Up" },
  { key: "VOLUME_DOWN", name: "Volume Down" },
];


@customElement(EDITOR_CARD_TAG_NAME)
class LgRemoteControlEditor extends LitElement {
  private _config: any;
  private hass: HomeAssistantFixed;
  private _overridesExpanded: boolean = false;
  private _expandedOverride: string | null = null;

  static get properties() {
    return {
      hass: {},
      _config: {},
    };
  }

  // setConfig works the same way as for the card itself
  setConfig(config) {
    this._config = config;
  }

  // This function is called when the input element of the editor loses focus or is changed
  configChanged(ev) {

    const _config = Object.assign({}, this._config);
    _config[ev.target.name.toString()] = ev.target.value;
    this._config = _config;

    // A config-changed event will tell lovelace we have made changed to the configuration
    // this make sure the changes are saved correctly later and will update the preview
    const event = new CustomEvent("config-changed", {
      detail: { config: _config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  configChangedBool(ev) {
    const inputName = ev.target.name;
    const newValue = ev.target.value === 'true';

    const _config = Object.assign({}, this._config);
    _config[inputName] = newValue;
    this._config = _config;

    // Invia l'evento "config-changed"
    const event = new CustomEvent('config-changed', {
      detail: { config: _config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  colorsConfigChanged(ev) {
    // Controlla se l'evento è scatenato da un'icona
    if (ev.target.tagName === "HA-ICON") {
      const inputName = ev.target.getAttribute("data-input-name");
      if (inputName) {
        const inputElement = this.shadowRoot.querySelector(`[name="${inputName}"]`) as any;
        if (inputElement) {
          // Imposta l'input su una stringa vuota
          inputElement.value = "";

          // Aggiorna la configurazione
          const _config = Object.assign({}, this._config);
          _config["colors"] = { ...(_config["colors"] ?? {}) };
          _config["colors"][inputName] = "";
          this._config = _config;

          // Invia l'evento "config-changed"
          const event = new CustomEvent("config-changed", {
            detail: { config: _config },
            bubbles: true,
            composed: true,
          });
          this.dispatchEvent(event);
        }
      }
    } else {
      // Se l'evento non proviene da un'icona, gestisci la modifica dell'input come al solito
      const _config = Object.assign({}, this._config);
      _config["colors"] = { ...(_config["colors"] ?? {}) };
      _config["colors"][ev.target.name.toString()] = ev.target.value;
      this._config = _config;

      // Invia l'evento "config-changed"
      const event = new CustomEvent("config-changed", {
        detail: { config: _config },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(event);
    }
  }
  _erase_av_receiver() {
    this._config.av_receiver_family = '';
    this.requestUpdate(); // Aggiunta per forzare il render
  }

  dimensionsConfigChanged(ev) {
    // Se l'evento non proviene da un'icona, gestisci la modifica dell'input come al solito
    const _config = Object.assign({}, this._config);
    _config["dimensions"] = { ...(_config["dimensions"] ?? {}) };

    if (ev.target.name === 'border_width') {
      _config["dimensions"][ev.target.name] = ev.target.value + 'px';
    } else {
      _config["dimensions"][ev.target.name] = ev.target.value;
    }

    this._config = _config;

    // Invia l'evento "config-changed"
    const event = new CustomEvent("config-changed", {
      detail: { config: _config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
  getLgTvEntityDropdown(optionValue){
    let mediaPlayerEntities = getMediaPlayerEntitiesByPlatform(this.hass, 'webostv');
    let heading = 'LG Media Player Entity';
    let blankEntity = html``;
    if(this._config.tventity == '' || !(mediaPlayerEntities).includes(optionValue)) {
      blankEntity = html `<option value="" selected> - - - - </option> `;
    }
    return html`
            ${heading}:<br>
            <select name="entity" id="entity" class="select-item" .value="${optionValue}"
                    @focusout=${this.configChanged}
                    @change=${this.configChanged} >
                ${blankEntity}
                ${mediaPlayerEntities.map((eid) => {
      if (eid != this._config.tventity) {
        return html`<option value="${eid}">${this.hass.states[eid].attributes.friendly_name || eid}</option> `;
      }
      else {
        return html`<option value="${eid}" selected>${this.hass.states[eid].attributes.friendly_name || eid}</option> `;
      }
    })}
            </select>
            <br>
            <br>`
  }

  setRemoteName(remoteNameValue) {
    let heading = 'Remote Control Name (option):';
    return html`
            ${heading}<br>
            <input type="text" name="name" id="name" style="width: 37.8ch;padding: .6em; font-size: 1em;" .value="${remoteNameValue}"
                   @input=${this.configChanged}
            <br><br>
        `;
  }

  selectMac(macValue) {
    macValue = macValue ?? '00:11:22:33:44:55';
    let heading = 'MAC Address:';
    return html`
            ${heading}<br>
            <input type="text" name="mac" id="mac" style="width: 37.8ch;padding: .6em; font-size: 1em;" .value="${macValue}"
                   @focusout=${this.configChanged}
                   @change=${this.configChanged}>
            <br><br>
        `;
  }

  selectColors(config) {
    let heading = 'Colors Configuration';

    if (!config || !config.colors) {
      config = { colors: { buttons: '', text: '', background: '', border: '' } };
    }

    return html`
            <div class="heading">${heading}:</div>
            <div class="color-selector" class="title">
                <label class="color-item" for="buttons" >Buttons Color:</label>
                <input type="color" name="buttons" id="buttons"  .value="${config.colors && config.colors.buttons || ''}"
                       @input=${this.colorsConfigChanged}></input>
                <ha-icon data-input-name="buttons" icon="mdi:trash-can-outline" @click=${this.colorsConfigChanged}></ha-icon>


                <label class="color-item" for="text">Text Color:</label>
                <input type="color" name="text" id="text"  .value="${config.colors && config.colors.text || ''}"
                       @input=${this.colorsConfigChanged}></input>
                       <ha-icon data-input-name="text" icon="mdi:trash-can-outline" @click=${this.colorsConfigChanged}></ha-icon>

                <label class="color-item" for="background">Background Color:</label>
                <input type="color" name="background" id="background"  .value="${config.colors && config.colors.background || ''}"
                       @input=${this.colorsConfigChanged}></input>
                       <ha-icon data-input-name="background" icon="mdi:trash-can-outline" @click=${this.colorsConfigChanged}></ha-icon>

                <label class="color-item" for="border">Border color:</label>
                <input type="color" name="border" id="border"  .value="${config.colors && config.colors.border || ''}"
                        @input=${this.colorsConfigChanged}></input>
                        <ha-icon data-input-name="border" icon="mdi:trash-can-outline" @click=${this.colorsConfigChanged}></ha-icon>
            </div>
        `;
  }

  colorButtonsConfig(optionvalue) {
    let heading = 'Do you want to configure an AV-Receiver';

    // Controlla se esiste una configurazione "color_buttons" e usa quel valore come opzione selezionata
    const selectedValue = this._config.color_buttons || 'false';

    return html`
          <div>Color buttons config</div>
          <select name="color_buttons" id="color_buttons" class="select-item"
                  .value="${selectedValue}"
                  @change=${this.configChangedBool}
          >
            <option value="true" ?selected=${selectedValue === 'true'}>True</option>
            <option value="false" ?selected=${selectedValue === 'false'}>False</option>
          </select>
          <br>
        `;
  }

  setDimensions(dimensions) {
    let heading = 'Dimensions';

    const borderWidth = parseFloat(dimensions.border_width??"1");

    return html`
          <div class="heading">${heading}:</div>
          <br>
          <label for="scale">Card Scale: ${dimensions.scale??1}</label><br>
          <input type="range" min="0.5" max="1.5" step="0.01" .value="${dimensions && dimensions.scale}" id="scale" name="scale" @input=${this.dimensionsConfigChanged} style="width: 40ch;">
          </input>
          <br>
          <br>
          <label for="border_width">Card border width: ${borderWidth}px</label><br>
          <input type="range" min="1" max="5" step="1" .value="${borderWidth}" id="border_width" name="border_width" @input=${this.dimensionsConfigChanged} style="width: 40ch;">
          </input>
          <br>
          </div>
        `;
  }

  getDeviceAVReceiverDropdown(optionvalue) {
    const familykeys = [...AvReceiverdevicemap.keys()];
    const blankEntity = (!this._config.av_receiver_family || this._config.av_receiver_family === '')
    ? html`<option value="" selected> - - - - </option>`
    : '';
    return html`
        <div>AV-Receiver config option:</div>
        <div style="display: flex;width: 40ch;align-items: center;">
         <select
            name="av_receiver_family"
            id="av_receiver_family"
            class="select-item"
            style="width:100%;"
            .value=${optionvalue}
            @focusout=${this.configChanged}
            @change=${this.configChanged}>
            ${blankEntity}
            ${familykeys.map((family) => {
              const receiverData = AvReceiverdevicemap.get(family);
              return html`
                <option value="${family}" ?selected=${optionvalue === family}>
                  ${receiverData.friendlyName}
                </option>
              `;})}
          </select>
          ${this._config.av_receiver_family && this._config.av_receiver_family != '' ? html`
          <ha-icon
            style="padding-left: 0.8em;"
            icon="mdi:trash-can-outline"
            @click=${this._erase_av_receiver}
            @mouseover=${() => this.focus()}
          ></ha-icon>`
          : ''}
        </div>
        <br />
    `;
  }

  getMediaPlayerEntityDropdown(optionValue) {
    if (this._config.av_receiver_family) {
      const mediaPlayerEntities = getMediaPlayerEntitiesByPlatform(this.hass, optionValue);
      const blankEntity = (this._config.ampli_entity === '' || !mediaPlayerEntities.includes(optionValue))
        ? html`<option value="" selected> - - - - </option>`
        : '';
      return html`
                A-Receiver config (option):<br>
                <select name="ampli_entity" id="ampli_entity" class="select-item" .value="${optionValue}"
                        @focusout=${this.configChanged}
                        @change=${this.configChanged}>
                    ${blankEntity}
                    ${mediaPlayerEntities.map((eid) => html`
                        <option value="${eid}" ?selected=${eid === this._config.ampli_entity}>
                            ${this.hass.states[eid].attributes.friendly_name || eid}
                        </option>
                    `)}
                </select>
                <br><br>
            `;
    } else {
      return html``; // Gestire il caso in cui `deviceFamily` non corrisponda a nessuna piattaforma
    }
  }

  _toggleOverridesSection() {
    this._overridesExpanded = !this._overridesExpanded;
    this.requestUpdate();
  }

  _toggleOverrideConfig(key: string) {
    this._expandedOverride = this._expandedOverride === key ? null : key;
    this.requestUpdate();
  }

  _onButtonSelect(ev) {
    const key = ev.target.value;
    if (key) {
      const _config = Object.assign({}, this._config);
      _config["keys"] = { ...(_config["keys"] ?? {}) };
      if (!_config["keys"][key]) {
        _config["keys"][key] = {};
      }
      this._config = _config;
      this._expandedOverride = key;
      const event = new CustomEvent("config-changed", {
        detail: { config: _config },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(event);
    }
    this.requestUpdate();
  }

  _updateOverrideField(key: string, field: string, value: string) {
    const _config = Object.assign({}, this._config);
    _config["keys"] = { ...(_config["keys"] ?? {}) };
    _config["keys"][key] = { ...(_config["keys"][key] ?? {}) };
    if (value) {
      if (field === "service") {
        _config["keys"][key]["service"] = value;
      } else if (field === "entity_id") {
        _config["keys"][key]["data"] = {
          ...(_config["keys"][key]["data"] ?? {}),
          entity_id: value,
        };
      } else {
        _config["keys"][key][field] = value;
      }
    } else {
      if (field === "service") {
        delete _config["keys"][key]["service"];
      } else if (field === "entity_id") {
        if (_config["keys"][key]["data"]) {
          delete _config["keys"][key]["data"]["entity_id"];
          if (Object.keys(_config["keys"][key]["data"]).length === 0) {
            delete _config["keys"][key]["data"];
          }
        }
      } else {
        delete _config["keys"][key][field];
      }
    }
    this._config = _config;
    const event = new CustomEvent("config-changed", {
      detail: { config: _config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  _deleteOverride(key: string) {
    const _config = Object.assign({}, this._config);
    if (_config["keys"] && _config["keys"][key]) {
      _config["keys"] = { ..._config["keys"] };
      delete _config["keys"][key];
      if (Object.keys(_config["keys"]).length === 0) {
        delete _config["keys"];
      }
    }
    this._config = _config;
    if (this._expandedOverride === key) {
      this._expandedOverride = null;
    }
    const event = new CustomEvent("config-changed", {
      detail: { config: _config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  _getConfiguredKeys(): string[] {
    if (!this._config?.keys) return [];
    return Object.keys(this._config.keys).filter((k) =>
      OVERRIDEABLE_BUTTONS.some((b) => b.key === k),
    );
  }

  _getButtonName(key: string): string {
    const btn = OVERRIDEABLE_BUTTONS.find((b) => b.key === key);
    return btn ? btn.name : key;
  }

  _getServiceOptions(): string[] {
    if (!this.hass?.services) return [];
    const services: string[] = [];
    for (const domain of Object.keys(this.hass.services)) {
      for (const service of Object.keys(this.hass.services[domain])) {
        services.push(`${domain}.${service}`);
      }
    }
    return services.sort();
  }

  _getEntityOptions(): string[] {
    if (!this.hass?.states) return [];
    return Object.keys(this.hass.states).sort();
  }

  _renderOverridesSection() {
    const configuredKeys = this._getConfiguredKeys();
    return html`
      <div class="overrides-header" @click=${() => this._toggleOverridesSection()}>
        <span class="heading">Overrides</span>
        <ha-icon icon="${this._overridesExpanded ? 'mdi:chevron-up' : 'mdi:chevron-down'}"></ha-icon>
      </div>
      ${this._overridesExpanded ? html`
        <div class="overrides-content">
          <div class="add-override-row">
            <select class="select-item" @change=${(e) => this._onButtonSelect(e)}>
              <option value="">Select button to override...</option>
              ${OVERRIDEABLE_BUTTONS.map((btn) => html`
                <option value="${btn.key}">${btn.name}</option>
              `)}
            </select>
          </div>
          ${configuredKeys.length > 0 ? html`
            <div class="configured-overrides">
              ${configuredKeys.map((key) => this._renderOverrideItem(key))}
            </div>
          ` : ''}
        </div>
      ` : ''}
    `;
  }

  _renderOverrideItem(key: string) {
    const isExpanded = this._expandedOverride === key;
    const keyConfig = this._config?.keys?.[key] || {};
    const icon = keyConfig.icon || '';
    const style = keyConfig.style || '';
    const service = keyConfig.service || '';
    const entityId = keyConfig.data?.entity_id || '';
    return html`
      <div class="override-item">
        <div class="override-item-header" @click=${() => this._toggleOverrideConfig(key)}>
          <span>${this._getButtonName(key)}</span>
          <div class="override-item-actions">
            <ha-icon icon="mdi:delete" @click=${(e) => { e.stopPropagation(); this._deleteOverride(key); }}></ha-icon>
            <ha-icon icon="${isExpanded ? 'mdi:chevron-up' : 'mdi:chevron-down'}"></ha-icon>
          </div>
        </div>
        ${isExpanded ? html`
          <div class="override-item-config">
            <label>Icon (optional):</label>
            <input type="text" placeholder="mdi:volume-high" .value=${icon}
                   @input=${(e) => this._updateOverrideField(key, 'icon', e.target.value)} />
            <label>Style (optional):</label>
            <input type="text" placeholder="color: green;" .value=${style}
                   @input=${(e) => this._updateOverrideField(key, 'style', e.target.value)} />
            <label>Service:</label>
            <input type="text" list="service-list" placeholder="media_player.volume_up" .value=${service}
                   @input=${(e) => this._updateOverrideField(key, 'service', e.target.value)} />
            <datalist id="service-list">
              ${this._getServiceOptions().map((s) => html`<option value="${s}"></option>`)}
            </datalist>
            <label>Entity ID:</label>
            <input type="text" list="entity-list" placeholder="media_player.receiver" .value=${entityId}
                   @input=${(e) => this._updateOverrideField(key, 'entity_id', e.target.value)} />
            <datalist id="entity-list">
              ${this._getEntityOptions().map((e) => html`<option value="${e}"></option>`)}
            </datalist>
          </div>
        ` : ''}
      </div>
    `;
  }


  render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    return html`
      ${this.getLgTvEntityDropdown(this._config.entity)}
      ${this.selectMac(this._config.mac)}
      ${this.setRemoteName(this._config.name)}
      ${this.selectColors(this._config)}
      ${this.colorButtonsConfig(this._config)}
      ${this.getDeviceAVReceiverDropdown(this._config.av_receiver_family)}
      ${this.getMediaPlayerEntityDropdown(this._config.av_receiver_family)}
      ${this.setDimensions(this._config.dimensions??{})}
      ${this._renderOverridesSection()}
      <br>
      <p>Other functionalities must be configured manually in code editor</p>
      <p>references to <a href="https://github.com/madmicio/LG-WebOS-Remote-Control">https://github.com/madmicio/LG-WebOS-Remote-Control</a></p>
      <div class="donations" style="display: flex">
          <a href="https://www.buymeacoffee.com/madmicio" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
          <form action="https://www.paypal.com/donate" method="post" target="_top">
          <input type="hidden" name="hosted_button_id" value="U5VQ9LHM82B7Q" />
          <input type="image" src="https://pics.paypal.com/00/s/ODdjZjVlZjAtOWVmYS00NjQyLTkyZTUtNWQ3MmMzMmIxYTcx/file.PNG" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" style="height:60px;" />
          <img alt="" border="0" src="https://www.paypal.com/en_IT/i/scr/pixel.gif" width="1" height="1" />
          </form>

      </div>
   `;
  }

  static get styles() {
    return css`

        .color-selector {
            display: grid;
            grid-template-columns: auto 8ch 3ch;
            width: 40ch;
        }

        .color-item {
            padding: .6em;
            font-size: 1em;
        }

        .heading {
            font-weight: bold;
        }

        .select-item {
            background-color: var(--label-badge-text-color);
            width: 40ch;
            padding: .6em;
            font-size: 1em;
        }

        .overrides-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5em;
            background-color: var(--primary-color);
            color: white;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 1em;
        }
        .overrides-header .heading {
            color: white;
        }
        .overrides-content {
            padding: 0.5em;
            background-color: var(--card-background-color);
            border: 1px solid var(--divider-color);
            border-top: none;
            border-radius: 0 0 4px 4px;
        }
        .add-override-row {
            margin-bottom: 0.5em;
        }
        .add-override-row select {
            width: 100%;
            box-sizing: border-box;
        }
        .configured-overrides {
            margin-top: 0.5em;
        }
        .override-item {
            margin-bottom: 0.5em;
            border: 1px solid var(--divider-color);
            border-radius: 4px;
            overflow: hidden;
        }
        .override-item-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5em;
            background-color: var(--secondary-background-color);
            cursor: pointer;
        }
        .override-item-actions {
            display: flex;
            align-items: center;
            gap: 0.5em;
        }
        .override-item-actions ha-icon {
            cursor: pointer;
        }
        .override-item-actions ha-icon[icon="mdi:delete"] {
            color: var(--error-color);
        }
        .override-item-config {
            padding: 0.5em;
            background-color: var(--card-background-color);
        }
        .override-item-config label {
            display: block;
            margin-top: 0.4em;
            margin-bottom: 0.2em;
            font-size: 0.9em;
        }
        .override-item-config input {
            width: calc(100% - 0.8em);
            padding: 0.4em;
            font-size: 0.9em;
            border: 1px solid var(--divider-color);
            border-radius: 4px;
            background-color: var(--input-background-color, var(--card-background-color));
            color: var(--primary-text-color);
        }

        `;
  }

}
