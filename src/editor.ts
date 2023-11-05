// Create and register the card editor
import { customElement } from "lit/decorators";
import { html, LitElement } from "lit";

import { HomeAssistantFixed } from "./types";
import { EDITOR_CARD_TAG_NAME } from "./const";


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
  "cast": {
    "friendlyName": "Google Cast ",
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


@customElement(EDITOR_CARD_TAG_NAME)
class LgRemoteControlEditor extends LitElement {
  private _config: any;
  private hass: HomeAssistantFixed;


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

  colorsConfigChanged(ev) {

    const _config = Object.assign({}, this._config);
    _config["colors"] = {...(_config["colors"] ?? {})}
    _config["colors"][ev.target.name.toString()] = ev.target.value;
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

  getLgTvEntityDropdown(optionValue){
    let mediaPlayerEntities = this.getMediaPlayerEntitiesByPlatform('webostv');
    let heading = 'LG Media Player Entity';
    this.getMediaPlayerEntitiesByPlatform('webostv');
    let blankEntity: any = '';
    if(this._config.tventity == '' || !(mediaPlayerEntities).includes(optionValue)) {
      blankEntity = html `<option value="" selected> - - - - </option> `;
    }
    return html`
            ${heading}:<br>
            <select name="entity" id="entity" style="padding: .6em; font-size: 1em;" .value="${optionValue}"
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

  getMediaPlayerEntitiesByPlatform(platformName) {
    let entities = Object.keys(this.hass.entities).filter(
      (eid) => this.hass.entities[eid].platform === platformName
    );
    const re = /media_player/;
    return entities.filter(a => re.exec(a));
  }

  selectMac(macValue) {
    // Imposta un valore di esempio predefinito

    macValue = macValue ?? '00:11:22:33:44:55';

    let heading = 'MAC Address:';
    return html`
            ${heading}<br>
            <input type="text" name="mac" id="mac" style="padding: .6em; font-size: 1em;" .value="${macValue}"
                   @focusout=${this.configChanged}
                   @change=${this.configChanged}>
            <br><br>
        `;
  }

  selectColors(config) {
    let heading = 'Colors Configuration';

    if (!config || !config.colors) {
      config = { colors: { buttons: '', text: '', background: '' } };
    }

    return html`
            ${heading}:<br>
            <div>
                <label for="buttons">Buttons Color:</label>
                <input type="text" name="buttons" id="buttons" style="padding: .6em; font-size: 1em;" .value="${config.colors && config.colors.buttons || ''}"
                       @focusout=${this.colorsConfigChanged}>
                <br>
                <label for="text">Text Color:</label>
                <input type="text" name="text" id="text" style="padding: .6em; font-size: 1em;" .value="${config.colors && config.colors.text || ''}"
                       @focusout=${this.colorsConfigChanged}>
                <br>
                <label for="background">Background Color:</label>
                <input type="text" name="background" id="background" style="padding: .6em; font-size: 1em;" .value="${config.colors && config.colors.background || ''}"
                       @focusout=${this.colorsConfigChanged}>
            </div>
        `;
  }

  AVreceicerConfig(optionvalue) {
    let heading = 'Do you want to configure an AV-Receiver?';
    return html`
            <div>La TV è smart?</div>
            <select name="is_smart_tv" id="is_smart_tv" style="padding: .6em; font-size: 1em;"
                    .value="${optionvalue}"
                    @focusout=${this.configChanged}
                    @change=${this.configChanged}
            >
                <option value="true" ?selected=${optionvalue === 'true'}>True</option>
                <option value="false" ?selected=${optionvalue === 'false'}>False</option>
            </select>
            <br>
        `;
  }

  getDeviceAVReceiverDropdown(optionvalue) {
    const familykeys = [...AvReceiverdevicemap.keys()];

    return html`
            <div>AV-Receiver config option:</div>
            <select
                name="av_receiver_family"
                id="av_receiver_family"
                style="padding: .6em; font-size: 1em;"
                .value=${optionvalue}
                @focusout=${this.configChanged}
                @change=${this.configChanged}
            >
                ${familykeys.map((family) => {
      const receiverData = AvReceiverdevicemap.get(family);

      return html`
                        <option value="${family}" ?selected=${optionvalue === family}>${receiverData.friendlyName}</option>
                    `;

    })}
            </select>
            <br />
        `;
  }

  getMediaPlayerEntityDropdown(optionValue) {
    if (this._config.av_receiver_family) {
      const mediaPlayerEntities = this.getMediaPlayerEntitiesByPlatform(optionValue);
      const blankEntity = (this._config.projectorentity === '' || !mediaPlayerEntities.includes(optionValue))
        ? html`<option value="" selected> - - - - </option>`
        : '';
      return html`
                A-Receiver config (option):}<br>
                <select name="projectorentity" id="projectorentity" style="padding: .6em; font-size: 1em;" .value="${optionValue}"
                        @focusout=${this.configChanged}
                        @change=${this.configChanged}>
                    ${blankEntity}
                    ${mediaPlayerEntities.map((eid) => html`
                        <option value="${eid}" ?selected=${eid === this._config.projectorentity}>
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



  render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    if(!this._config.av_receiver_family) {
      this._config.av_receiver_family = AvReceiverdevicemap.keys().next().value;
    }

    return html`
            <br>
            ${this.getLgTvEntityDropdown(this._config.entity)}
            <br>
            ${this.selectMac(this._config.mac)}
            <br>
            ${this.selectColors(this._config)}
            ${this.AVreceicerConfig(this._config.is_smart_tv)}
            ${this.getDeviceAVReceiverDropdown(this._config.av_receiver_family)}
            ${this.getMediaPlayerEntityDropdown(this._config.av_receiver_family)}

        `;
  }

}
