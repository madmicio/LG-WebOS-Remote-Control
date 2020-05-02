var LitElement = LitElement || Object.getPrototypeOf(customElements.get("ha-panel-lovelace"));
var html = LitElement.prototype.html;
var css = LitElement.prototype.css;

class LgRemoteControl extends LitElement {

    static get disneyIcon() {
        return html`<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="17.000000pt" height="17.000000pt" viewBox="0 0 122.000000 125.000000"
                  preserveAspectRatio="xMidYMid meet">
                 <metadata>
                 Created by potrace 1.15, written by Peter Selinger 2001-2017
                 </metadata>
                 <g transform="translate(0.000000,125.000000) scale(0.100000,-0.100000)"
                 fill="var(--remote-text-color)" stroke="none">
                 <path d="M841 1181 c-14 -9 -12 -53 4 -107 6 -18 -1 -24 -50 -44 -50 -20 -56
                 -26 -53 -49 4 -33 34 -39 89 -17 22 9 41 16 43 16 3 0 12 -23 21 -50 19 -58
                 43 -76 71 -56 17 13 17 19 7 58 -6 23 -14 50 -18 59 -4 12 6 20 42 33 70 25
                 78 31 78 57 0 31 -38 37 -102 15 -26 -9 -47 -16 -48 -16 -1 0 -8 19 -14 43
                 -20 64 -37 79 -70 58z"/>
                 <path d="M293 805 c-113 -31 -173 -77 -173 -132 0 -34 8 -38 45 -23 19 7 19 8
                 -5 18 l-25 9 33 20 c61 37 171 56 295 50 127 -6 203 -23 297 -69 115 -56 200
                 -165 200 -257 0 -39 -38 -107 -76 -136 -75 -57 -200 -99 -221 -73 -6 7 -22 49
                 -36 93 -14 44 -28 88 -32 97 -9 23 55 40 133 36 l57 -3 -3 -32 c-4 -40 18 -45
                 42 -11 24 33 20 71 -10 99 -22 20 -35 24 -92 24 -37 0 -86 -4 -109 -8 l-43 -9
                 -23 54 c-13 29 -34 62 -46 72 -21 19 -21 19 -21 -11 0 -16 5 -56 12 -88 l11
                 -58 -29 -20 c-68 -48 -114 -104 -114 -136 0 -51 71 -106 188 -147 39 -13 58
                 -27 72 -51 11 -18 24 -33 29 -33 24 0 41 14 41 35 0 20 7 24 59 33 173 31 293
                 163 278 308 -13 129 -112 232 -290 304 -146 58 -326 76 -444 45z m259 -502
                 l25 -88 -33 -3 c-37 -3 -140 43 -158 70 -8 13 -6 22 9 38 20 23 101 69 121 70
                 6 0 22 -39 36 -87z"/>
                 </g>
                 </svg>`;
    }

    static get daznIcon() {
        return html`<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="18.000000pt" height="16.000000pt" viewBox="0 0 324.000000 323.000000"
                    preserveAspectRatio="xMidYMid meet">
                  <metadata>
                  Created by potrace 1.15, written by Peter Selinger 2001-2017
                  </metadata>
                  <g transform="translate(0.000000,323.000000) scale(0.09000,-0.090000)"
                  fill="var(--remote-text-color)"  stroke="none">
                  <path d="M197 3033 c-4 -3 -7 -286 -7 -627 l0 -621 87 -87 87 -88 -87 -88 -87
                  -89 0 -627 0 -626 1430 0 1430 0 0 627 0 628 -87 88 -88 88 88 86 87 86 0 628
                  0 629 -1423 0 c-783 0 -1427 -3 -1430 -7z m2713 -663 l0 -531 -115 -117 -115
                  -117 115 -115 115 -115 0 -528 0 -527 -1290 0 -1290 0 0 527 0 528 117 117
                  118 118 -118 118 -117 117 0 521 c0 286 3 524 7 527 3 4 584 7 1290 7 l1283 0
                  0 -530z"/>
                  <path d="M800 2175 l0 -395 238 0 237 0 87 88 87 87 1 219 1 219 -88 89 -88
                  88 -237 0 -238 0 0 -395z m462 208 l48 -47 0 -160 0 -160 -47 -48 -47 -48
                  -138 0 -138 0 0 248 c0 137 3 252 7 255 3 4 65 7 137 7 l130 0 48 -47z"/>
                  <path d="M2052 2553 c-10 -18 -68 -157 -214 -508 -43 -104 -85 -205 -93 -223
                  -8 -18 -15 -35 -15 -37 0 -3 34 -5 75 -5 l74 0 22 50 21 50 198 0 197 0 21
                  -50 21 -50 77 0 c57 0 75 3 71 13 -3 6 -21 48 -40 92 -31 73 -69 164 -230 550
                  l-54 130 -61 3 c-50 2 -62 0 -70 -15z m141 -375 l65 -158 -139 0 -139 0 20 48
                  c11 26 41 100 67 164 26 64 51 114 55 110 3 -4 35 -78 71 -164z"/>
                  <path d="M806 1433 c-3 -3 -6 -37 -6 -74 l0 -68 205 2 c113 1 205 1 205 -1 0
                  -2 -37 -49 -82 -104 -46 -55 -94 -115 -108 -132 -13 -17 -68 -84 -122 -148
                  l-98 -118 0 -70 0 -70 300 0 300 0 0 70 0 70 -205 0 c-113 0 -205 2 -205 5 0
                  3 9 15 19 27 11 13 103 124 205 248 l186 225 -3 70 -2 70 -291 2 c-160 1 -294
                  -1 -298 -4z"/>
                  <path d="M1795 1432 c-3 -3 -5 -180 -5 -394 l0 -388 70 0 70 0 2 252 3 251
                  175 -251 175 -251 78 -1 77 0 0 394 0 395 -67 -2 -68 -2 -5 -276 -5 -276 -195
                  279 -195 279 -52 -2 c-29 -1 -55 -5 -58 -7z"/>
                  </g>
                  </svg>`;
    }

    static get tvoptic() {
        return html`<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="56.000000pt" height="17.000000pt" viewBox="0 0 567.000000 171.000000"
                  preserveAspectRatio="xMidYMid meet">
                  <metadata>
                  Created by potrace 1.16, written by Peter Selinger 2001-2019
                  </metadata>
                  <g transform="translate(0.000000,171.000000) scale(0.100000,-0.100000)"
                  fill="var(--remote-text-color)" stroke="none">
                  <path d="M1408 1423 l-188 -188 -103 103 c-108 108 -136 122 -170 84 -34 -38
                  -22 -62 85 -169 l103 -103 -269 0 c-303 0 -316 -3 -367 -73 l-29 -40 0 -407
                  c0 -407 0 -407 23 -441 12 -18 38 -44 56 -56 l34 -23 637 0 637 0 34 23 c18
                  12 44 38 56 56 23 34 23 34 23 441 l0 407 -29 40 c-51 70 -64 73 -367 73
                  l-268 0 192 193 c106 106 192 200 192 208 0 30 -30 59 -63 59 -28 0 -54 -22
                  -219 -187z m9 -417 c61 -19 106 -66 125 -128 8 -29 13 -112 13 -248 0 -235
                  -11 -287 -70 -338 -56 -49 -110 -57 -410 -57 -301 0 -354 7 -411 57 -57 50
                  -69 110 -69 338 1 384 27 403 540 395 173 -3 243 -7 282 -19z m392 -161 c16
                  -8 31 -22 35 -30 33 -86 -56 -160 -127 -105 -48 38 -41 110 13 137 32 16 45
                  16 79 -2z m0 -230 c75 -38 43 -155 -42 -155 -85 0 -113 119 -37 157 32 16 45
                  16 79 -2z"/>
                  <path d="M4712 1553 c-123 -118 -130 -123 -159 -112 -43 16 -154 19 -189 4
                  -43 -18 -76 -83 -72 -144 6 -117 100 -279 254 -437 106 -108 252 -189 343
                  -189 35 0 56 5 59 13 2 6 8 12 12 12 15 0 56 43 74 77 20 41 20 92 0 158 l-17
                  52 72 70 c71 71 71 72 71 125 0 50 -3 57 -40 93 -22 21 -40 44 -40 50 0 6 12
                  22 26 36 59 55 70 119 28 168 -27 32 -77 48 -115 36 -12 -4 -41 -25 -64 -46
                  l-42 -38 -43 44 c-40 41 -49 45 -92 45 -32 0 -54 -6 -66 -17z m379 -75 c8 -15
                  3 -27 -29 -66 -66 -78 -87 -94 -118 -90 -23 2 -30 9 -32 31 -3 23 6 37 44 73
                  93 89 112 96 135 52z m-246 -8 c18 -19 26 -34 20 -38 -14 -10 -35 -59 -35 -82
                  0 -11 20 -40 44 -65 38 -41 47 -45 79 -42 20 2 47 11 60 20 23 15 26 14 56
                  -17 17 -17 31 -41 31 -52 0 -20 -62 -94 -78 -94 -7 0 -297 292 -321 323 -12
                  16 -11 21 14 47 40 42 90 41 130 0z m-134 -161 l70 -72 -52 -53 c-30 -30 -57
                  -54 -62 -54 -4 0 -40 32 -79 71 l-71 70 54 55 c29 30 57 54 62 54 5 0 40 -32
                  78 -71z m187 -192 l72 -72 -53 -57 -54 -57 -74 75 -73 74 54 55 c30 30 55 55
                  55 55 0 0 33 -33 73 -73z"/>
                  <path d="M4144 1153 c-48 -71 -122 -177 -164 -237 -139 -201 -159 -241 -160
                  -311 0 -57 36 -170 63 -200 10 -11 25 -31 32 -45 13 -26 87 -90 108 -94 7 -2
                  25 -8 41 -15 89 -36 167 -33 254 10 34 18 62 35 62 38 0 4 23 20 50 36 28 16
                  50 33 50 37 0 4 4 8 9 8 13 0 325 210 329 221 2 5 10 9 18 9 23 0 17 36 -7 37
                  -61 5 -195 72 -259 131 -45 42 -137 133 -155 154 -72 81 -145 214 -164 297 -5
                  23 -11 45 -14 47 -2 2 -44 -53 -93 -123z"/>
                  <path d="M2780 880 l0 -110 -110 0 -110 0 0 -75 0 -75 110 0 110 0 0 -110 0
                  -110 80 0 80 0 0 110 0 110 110 0 110 0 0 75 0 75 -110 0 -110 0 0 110 0 110
                  -80 0 -80 0 0 -110z"/>
                  <path d="M3780 330 c-25 -27 -46 -54 -49 -61 -5 -15 109 -129 129 -129 8 0 39
                  23 68 51 l53 51 -23 16 c-13 8 -47 39 -77 69 -30 29 -54 53 -55 52 -1 0 -21
                  -23 -46 -49z"/>
                  </g>
                  </svg>`;
    }

    static get optic() {
        return html`<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="18.000000pt" height="18.000000pt" viewBox="0 0 150.000000 150.000000"
                preserveAspectRatio="xMidYMid meet">
               <metadata>
               Created by potrace 1.16, written by Peter Selinger 2001-2019
               </metadata>
               <g transform="translate(0.000000,150.000000) scale(0.100000,-0.100000)"
               fill="var(--remote-text-color)" stroke="none">
               <path d="M951 1356 l-73 -74 -37 15 c-49 21 -142 20 -175 -3 -84 -54 -73 -186
               29 -350 124 -198 363 -374 486 -359 41 6 99 46 122 84 21 36 22 104 2 161 -17
               49 -25 35 78 143 40 43 47 56 47 91 0 34 -7 47 -42 83 l-42 43 25 27 c41 44
               59 76 59 101 0 58 -71 121 -122 109 -13 -4 -45 -24 -70 -46 l-45 -40 -44 45
               c-37 38 -49 44 -84 44 -37 0 -47 -6 -114 -74z m174 -25 c27 -30 28 -30 11 -65
               -23 -50 -20 -70 18 -110 27 -29 41 -36 71 -36 22 0 46 7 57 17 17 16 20 15 53
               -17 19 -19 35 -43 35 -54 0 -11 -17 -37 -37 -58 l-37 -38 -163 162 -163 162
               32 33 c42 43 83 44 123 4z m233 17 c23 -23 12 -45 -52 -106 -64 -62 -79 -69
               -104 -53 -30 19 -19 46 41 109 61 62 90 75 115 50z m-354 -169 l70 -70 -56
               -56 -56 -56 -73 72 -73 72 54 54 c30 30 57 55 60 55 3 0 36 -32 74 -71z m193
               -307 l-52 -52 -70 70 -70 70 53 53 53 54 69 -71 69 -71 -52 -53z"/>
               <path d="M375 894 c-105 -152 -186 -280 -196 -309 -47 -136 38 -314 187 -390
               51 -26 70 -30 139 -30 l81 0 91 60 c264 173 452 301 457 313 3 7 2 11 -3 7
               -17 -10 -135 40 -207 88 -39 26 -105 82 -146 125 -114 119 -164 200 -203 326
               l-21 69 -179 -259z"/>
               <path d="M118 243 l-52 -53 59 -60 c33 -33 64 -60 70 -60 6 0 32 22 58 48 l48
               49 -65 65 -65 65 -53 -54z"/>
               </g>
               </svg>`;
    }

    static get arc() {
        return html`<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="43.000000pt" height="20.000000pt" viewBox="0 0 323.000000 150.000000"
              preserveAspectRatio="xMidYMid meet">
              <metadata>
              Created by potrace 1.16, written by Peter Selinger 2001-2019
              </metadata>
              <g transform="translate(0.000000,150.000000) scale(0.100000,-0.100000)"
              fill="var(--remote-text-color)" stroke="none">
              <path d="M791 1352 c-60 -32 -71 -67 -71 -229 l0 -143 -280 0 -280 0 0 -235 0
              -235 280 0 280 0 0 -136 c0 -154 10 -190 65 -224 32 -20 48 -20 885 -20 l853
              0 34 26 c36 27 63 72 56 92 -4 9 37 12 184 12 l189 0 42 85 42 85 0 323 0 322
              -51 83 -51 82 -174 0 c-158 0 -175 2 -180 18 -12 40 -32 68 -63 89 l-34 23
              -846 0 c-801 0 -848 -1 -880 -18z m1669 -602 l0 -470 -790 0 -790 0 0 470 0
              470 790 0 790 0 0 -470z m439 311 c11 -20 16 -581 5 -618 -6 -22 -10 -23 -145
              -23 l-139 0 0 330 0 330 135 0 c121 0 135 -2 144 -19z m-2179 -306 l0 -75
              -200 0 -200 0 0 75 0 75 200 0 200 0 0 -75z"/>
              <path d="M1377 874 c-4 -4 -7 -22 -7 -41 l0 -33 135 0 135 0 0 -55 0 -55 -85
              0 -85 0 0 45 0 45 -50 0 -50 0 0 -78 0 -77 163 2 c89 2 165 3 169 3 19 0 38
              64 38 124 0 54 -4 70 -24 93 l-24 28 -154 3 c-84 2 -157 0 -161 -4z"/>
              <path d="M1775 867 c-3 -7 -4 -65 -3 -128 l3 -114 48 -3 47 -3 0 95 0 96 40 0
              40 0 0 -95 0 -95 50 0 50 0 0 95 0 95 40 0 39 0 3 -92 3 -93 53 -3 52 -3 0 98
              c0 88 -2 101 -24 128 l-24 30 -206 3 c-167 3 -207 1 -211 -11z"/>
              <path d="M960 745 l0 -125 55 0 55 0 0 45 0 45 83 0 82 0 0 -42 0 -43 50 0 50
              0 0 120 0 120 -52 3 -53 3 0 -50 0 -51 -80 0 -80 0 0 50 0 50 -55 0 -55 0 0
              -125z"/>
              <path d="M2270 745 l0 -125 50 0 50 0 0 125 0 125 -50 0 -50 0 0 -125z"/>
              </g>
              </svg>`;
    }

    static get lineout() {
        return html`<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="20.000000pt" height="20.000000pt" viewBox="0 0 162.000000 170.000000"
              preserveAspectRatio="xMidYMid meet">
              <metadata>
              Created by potrace 1.16, written by Peter Selinger 2001-2019
              </metadata>
              <g transform="translate(0.000000,170.000000) scale(0.100000,-0.100000)"
              fill="var(--remote-text-color)" stroke="none">
              <path d="M436 1614 c-12 -12 -16 -37 -16 -110 l0 -94 -60 0 -60 0 0 -50 0 -50
              165 0 165 0 0 50 0 50 -60 0 -60 0 0 94 c0 96 -11 126 -45 126 -7 0 -21 -7
              -29 -16z"/>
              <path d="M1046 1614 c-12 -12 -16 -37 -16 -110 l0 -94 -60 0 -60 0 0 -50 0
              -50 165 0 165 0 0 50 0 50 -60 0 -60 0 0 94 c0 96 -11 126 -45 126 -7 0 -21
              -7 -29 -16z"/>
              <path d="M240 1130 c0 -86 4 -140 10 -141 6 -1 16 -2 23 -3 8 -1 13 -29 15
              -96 1 -52 7 -105 13 -116 13 -25 49 -44 84 -44 25 0 25 -1 25 -92 1 -195 65
              -247 379 -303 145 -26 213 -51 225 -80 3 -9 6 -55 6 -101 l0 -84 60 0 60 0 0
              330 c0 321 1 330 20 330 30 0 67 20 79 44 6 11 12 64 13 116 3 90 4 95 26 98
              22 3 22 6 22 143 l0 139 -225 0 -225 0 0 -139 c0 -137 0 -140 23 -143 21 -3
              22 -8 24 -93 2 -49 5 -100 8 -112 6 -26 52 -53 90 -53 l25 0 0 -165 c0 -91 -2
              -165 -4 -165 -2 0 -21 6 -42 14 -22 7 -70 19 -109 25 -245 43 -305 63 -330
              112 -9 17 -15 57 -15 104 0 74 0 75 25 75 38 0 84 27 90 53 3 12 6 63 8 112 2
              85 3 90 25 93 22 3 22 6 22 143 l0 139 -225 0 -225 0 0 -140z"/>
              </g>
              </svg>`;
    }

    static get iconMapping() {
        return {
            "disney": this.disneyIcon,
            "dazn": this.daznIcon
        };
    }

    static get properties() {
        return {
            hass: {},
            config: {},
            _show_inputs: {},
            _show_sound_output: {},
            _show_text: {},
            _show_keypad: {}
        };
    }

    constructor() {
        super();
        this._show_inputs = false;
        this._show_sound_output = false;
        this._show_text = false;
        this._show_keypad = false;
    }

    render() {
        const stateObj = this.hass.states[this.config.entity];
        const scale = this.config.scale ? this.config.scale : 1;
        const buttonColor = this.config.colors && this.config.colors.buttons ? this.config.colors.buttons : "#f2f0fa";
        const textColor = this.config.colors && this.config.colors.texts ? this.config.colors.texts : "var(--primary-text-color)";
        const backgroundColor = this.config.colors && this.config.colors.background ? this.config.colors.background : "var(--primary-background-color)";
        const colorButtons = this.config.color_buttons === "enable";
        return html`
            <div class="card" style="transform: scale(${scale})">
            <div class="page" style="--remote-button-color: ${buttonColor}; --remote-text-color: ${textColor}; --remote-color: ${backgroundColor};">
                  <div class="grid-container-power">

                    <div class="grid-item">
                      <button class="btn-flat ripple" @click=${() => this._channelList()}><ha-icon icon="mdi:format-list-numbered"/></button>
                    </div>
                    <div class="grid-item">
                      <button class="btn ripple" @click=${() => this._media_player_service("toggle")}><ha-icon icon="mdi:power" style="color: red;"/></button>
                    </div>
<!--                    <div class="grid-item">
                      <button class="btn-flat ripple" @click=${() => this._123()}>123</button>
                    </div> -->
                    <div class="grid-item">
                      <button class="btn-flat ripple" @click=${() => this._show_keypad = !this._show_keypad}>123</button>
                    </div>
                  </div> 

                 ${this._show_inputs ? html`
<!-- ################################# SOURCES ################################# -->
                  <div class="grid-container-input">
                    <div class="shape-input">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="m 40 5 a 10 10 0 0 1 10 10 a 15 15 0 0 0 15 15 h 5 a 10 10 0 0 1 10 10 h -80 v -25 a 10 10 0 0 1 10 -10 z m 0 0" fill="var(--remote-button-color)" stroke="#000000" stroke-width="0" /></svg>
                    </div>
                    <div class="shape-input-background">
                    </div>
                    <div class="grid-item item_1_dx">
                      <button class="btn ripple" @click=${() => this._show_inputs = false}><ha-icon icon="mdi:undo-variant"/></button>
                    </div>
                    <div class="source_text">
                      <p><b>SOURCE</b></p>
                    </div>
                    <div class="grid-item-input">
                    ${stateObj.attributes.source_list.map(source => html`
                    <button class="${stateObj.attributes.source === source ? 'btn_hdmi-sound-on' : 'btn_hdmi-sound  ripple overlay'}" @click=${() => {
                        this._select_source(source);
                        this._show_inputs = false;
                    }}}>${source}</button>
                    `)}
                    </div>
                  </div>
<!-- ################################# SOURCES END ################################# -->
                 ` : html`

                 ${this._show_sound_output ? html`
<!-- ################################# SOUND ################################# -->
                  <div class="grid-container-sound">
                    <div class="shape-sound">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238 270"><path d="m 124 15 h 84 a 30 30 0 0 1 30 30 v 195 a 30 30 0 0 1 -30 30 h -178 a 30 30 0 0 1 -30 -30 v -115 a 30 30 0 0 1 30 -30 a 50 50 0 0 0 50 -50 a 30 30 0 0 1 30 -30 z " fill="var(--remote-button-color)" stroke="#000000" stroke-width="0" /></svg>
                    </div>
                    <div class="grid-item_sound_back">
                      <button class="btn ripple" @click=${() => this._show_sound_output = false}><ha-icon icon="mdi:undo-variant"/></button>
                    </div>
                    ${this._show_text ? html`
                        <div class="grid-item_sound_icon_text">
                        <button class="btn_soundoutput ripple" @click=${() => this._show_text = false}>sound</button>
                        </div>
                        <div class="grid-item item_3_sx">
                          <button class="${stateObj.attributes.sound_output === "tv_speaker" ? 'btn_sound_on' : 'btn_sound_off ripple overlay'}" @click=${() => this._select_sound_output("tv_speaker")}>TV Speaker</button>
                        </div>
                        <div class="grid-item item_3_c">
                          <button class="${stateObj.attributes.sound_output === "tv_external_speaker" ? 'btn_sound_on' : 'btn_sound_off ripple overlay'}" @click=${() => this._select_sound_output("tv_external_speaker")}>TV + Optic</button>
                          </div>
                        <div class="grid-item item_4_sx">
                          <button class="${stateObj.attributes.sound_output === "tv_speaker_headphone" ? 'btn_sound_on' : 'btn_sound_off ripple overlay'}" @click=${() => this._select_sound_output("tv_speaker_headphone")}>TV + H-Phone</button>
                          </div>
                        <div class="grid-item item_4_c">
                          <button class="${stateObj.attributes.sound_output === "external_optical" ? 'btn_sound_on' : 'btn_sound_off ripple overlay'}" @click=${() => this._select_sound_output("external_optical")}>Optical</button>
                          </div>
                        <div class="grid-item item_5_sx">
                          <button class="${stateObj.attributes.sound_output === "external_arc" ? 'btn_sound_on' : 'btn_sound_off ripple overlay'}" @click=${() => this._select_sound_output("external_arc")}>HDMI</button>
                          </div>
                        <div class="grid-item item_5_c">
                          <button class="${stateObj.attributes.sound_output === "lineout" ? 'btn_sound_on' : 'btn_sound_off ripple overlay'}" @click=${() => this._select_sound_output("lineout")}>Lineout</button>
                          </div>
                        <div class="grid-item item_6_sx">
                          <button class="${stateObj.attributes.sound_output === "headphone" ? 'btn_sound_on' : 'btn_sound_off ripple overlay'}" @click=${() => this._select_sound_output("headphone")}>HeadPhone</button>
                        </div>
                        <div class="grid-item item_6_c">
                          <button class="${stateObj.attributes.sound_output === "bt_soundbar" ? 'btn_sound_on' : 'btn_sound_off ripple overlay'}" @click=${() => this._select_sound_output("bt_soundbar")}>Bluetooth</button>
                        </div>
                      </div>
                  ` : html`
                    <div class="grid-item_sound_icon_text">
                    <button class="btn ripple" @click=${() => this._show_text = true}><ha-icon style="height: 50px; width: 50px;" icon="mdi:speaker"></button>
                      </div>
                      <div class="grid-item item_3_sx">
                        <button class="${stateObj.attributes.sound_output === "tv_speaker" ? 'btn_sound_on' : 'btn_sound_off ripple overlay'}" @click=${() => this._select_sound_output("tv_speaker")}><ha-icon icon="mdi:television-classic"></button>
                      </div>
                      <div class="grid-item item_3_c">
                        <button class="${stateObj.attributes.sound_output === "tv_external_speaker" ? 'btn_sound_on' : 'btn_sound_off ripple overlay'}" @click=${() => this._select_sound_output("tv_external_speaker")}>${LgRemoteControl.tvoptic}</button>
                        </div>
                      <div class="grid-item item_4_sx">
                        <button class="${stateObj.attributes.sound_output === "tv_speaker_headphone" ? 'btn_sound_on' : 'btn_sound_off ripple overlay'}" @click=${() => this._select_sound_output("tv_speaker_headphone")}><ha-icon icon="mdi:television-classic"></ha-icon> + <ha-icon icon="mdi:headphones"/ha-icon></button>
                        </div>
                      <div class="grid-item item_4_c">
                        <button class="${stateObj.attributes.sound_output === "external_optical" ? 'btn_sound_on' : 'btn_sound_off ripple overlay'}" @click=${() => this._select_sound_output("external_optical")}>${LgRemoteControl.optic}</button>
                        </div>
                      <div class="grid-item item_5_sx">
                        <button class="${stateObj.attributes.sound_output === "external_arc" ? 'btn_sound_on' : 'btn_sound_off ripple overlay'}" @click=${() => this._select_sound_output("external_arc")}>${LgRemoteControl.arc}</button>
                        </div>
                      <div class="grid-item item_5_c">
                        <button class="${stateObj.attributes.sound_output === "lineout" ? 'btn_sound_on' : 'btn_sound_off ripple overlay'}" @click=${() => this._select_sound_output("lineout")}>${LgRemoteControl.lineout}</button>
                        </div>
                      <div class="grid-item item_6_sx">
                        <button class="${stateObj.attributes.sound_output === "headphone" ? 'btn_sound_on' : 'btn_sound_off ripple overlay'}" @click=${() => this._select_sound_output("headphone")}><ha-icon icon="mdi:headphones"></button>
                      </div>
                      <div class="grid-item item_6_c">
                        <button class="${stateObj.attributes.sound_output === "bt_soundbar" ? 'btn_sound_on' : 'btn_sound_off ripple overlay'}" @click=${() => this._select_sound_output("bt_soundbar")}><ha-icon icon="mdi:bluetooth"></button>
                      </div>
                    </div>
                    `}
<!-- ################################# SOUND END ################################# -->
                    ` : html`

                    ${this._show_keypad ? html`
<!-- ################################ keypad ################################## -->
                    <div class="grid-container-keypad">
                      <div class="grid-item">
                        <button class="btn-keypad ripple" @click=${() => this._button("1")}>1</button>
                      </div>
                      <div class="grid-item">
                        <button class="btn-keypad ripple" @click=${() => this._button("2")}>2</button>
                      </div>
                      <div class="grid-item">
                        <button class="btn-keypad ripple" @click=${() => this._button("3")}>3</button>
                      </div> 
                      <div class="grid-item">
                        <button class="btn-keypad ripple" @click=${() => this._button("4")}>4</button>
                      </div>
                      <div class="grid-item">
                        <button class="btn-keypad ripple" @click=${() => this._button("5")}>5</button>
                      </div>
                      <div class="grid-item">
                        <button class="btn-keypad ripple" @click=${() => this._button("6")}>6</button>
                      </div> 
                      <div class="grid-item">
                        <button class="btn-keypad ripple" @click=${() => this._button("7")}>7</button>
                      </div>
                      <div class="grid-item">
                        <button class="btn-keypad ripple" @click=${() => this._button("8")}>8</button>
                      </div>
                      <div class="grid-item">
                        <button class="btn-keypad ripple" @click=${() => this._button("9")}>9</button>
                      </div>
                      <div class="grid-item">
                        <button class="btn-keypad"></button>
                      </div>
                      <div class="grid-item">
                        <button class="btn-keypad ripple" @click=${() => this._button("0")}>0</button>
                      </div>
                      <div class="grid-item">
                        <button class="btn-keypad"></button>
                      </div> 
                  </div>
  <!-- ################################# keypad end ############################## --> 


                 ` : html`
<!-- ################################# DIRECTION PAD ################################# -->
                  <div class="grid-container-cursor">
                    <div class="shape">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 79"><path d="m 30 15 a 10 10 0 0 1 20 0 a 15 15 0 0 0 15 15 a 10 10 0 0 1 0 20 a 15 15 0 0 0 -15 15 a 10 10 0 0 1 -20 0 a 15 15 0 0 0 -15 -15 a 10 10 0 0 1 0 -20 a 15 15 0 0 0 15 -15" fill="var(--remote-button-color)" stroke="#000000" stroke-width="0" /></svg>
                    </div>
                    <div class="grid-item item_1_sx" >
                      <button class="btn ripple" @click=${() => this._show_sound_output = true}><ha-icon icon="mdi:speaker"/></button>
                    </div>
                    <div class="grid-item item_1_c" style="margin-bottom: 9px;">
                      <button class="btn ripple" style="background-color: transparent;" @click=${() => this._button("UP")}><ha-icon icon="mdi:chevron-up"/></button>
                    </div>
                    <div class="grid-item item_1_dx">
                      <button class="btn ripple" @click=${() => this._show_inputs = true}><ha-icon icon="mdi:import"/></button>
                    </div>
                    <div class="grid-item item_2_sx" style="margin-right: 4px;">
                      <button class="btn ripple" style="background-color: transparent;" @click=${() => this._button("LEFT")}><ha-icon icon="mdi:chevron-left"/></button>
                    </div>
                    <div class="grid-item item_2_c" style="padding: 0px;">
                      <button class="btn bnt_ok ripple"  @click=${() => this._button("ENTER")}>OK</button>
                    </div>
                    <div class="grid-item item_2_dx" style="margin-left: 4px;">
                      <button class="btn ripple" style="background-color: transparent;" @click=${() => this._button("RIGHT")}><ha-icon icon="mdi:chevron-right"/></button>
                    </div>
                    <div class="grid-item item_3_sx">
                      <button class="btn ripple" @click=${() => this._button("BACK")}><ha-icon icon="mdi:undo-variant"/></button>
                    </div>
                    <div class="grid-item item_3_c" style="margin-top: 9px;">
                      <button class="btn ripple" style="background-color: transparent;" @click=${() => this._button("DOWN")}><ha-icon icon="mdi:chevron-down"/></button>
                    </div>
                    <div class="grid-item item_3_dx">
                      <button class="btn ripple" @click=${() => this._button("EXIT")}>EXIT</button>
                    </div>

                  </div>
<!-- ################################# DIRECTION PAD END ################################# -->
                  `}
                  
                  `}
<!-- ################################# SOURCE BUTTONS ################################# -->
                  ${this.config.sources ? html`
                    <div class="grid-container-source">
                    ${this.config.sources.map(source => {
            return html`
                      <div class="grid-item">
                        <button class="btn_source ripple" @click=${() => this._select_source(source.name)}>
                          ${LgRemoteControl.getIcon(source.icon)}
                        </button>
                      </div>
                      
                      `;

        })}
                    </div>
                    ` : html`
                  <div class="grid-container-source">
                    <div class="grid-item">
                      <button class="btn_source ripple" @click=${() => this._select_source("Netflix")}><ha-icon icon="mdi:netflix"/></button>
                    </div>
                    <div class="grid-item">
                      <button class="btn_source ripple" @click=${() => this._select_source("Amazon Prime Video")}><ha-icon icon="mdi:amazon"/></button>
                    </div>
                    <div class="grid-item">
                      <button class="btn_source ripple" @click=${() => this._select_source("Disney+")}>${LgRemoteControl.disneyIcon}</button>
                    </div>
                    <div class="grid-item">
                      <button class="btn_source ripple" @click=${() => this._select_source("DAZN")}>${LgRemoteControl.daznIcon}</button>
                    </div>
                  </div>`}
<!-- ################################# SOURCE BUTTONS END ################################# -->

<!-- ################################# COLORED BUTTONS ################################# -->
                ${colorButtons ? html`
                  <div class="grid-container-source" style="grid-template-rows: 26px">
                    <div class="grid-item">
                      <button class="btn_source ripple" style="background-color: red; height: 22px;" @click=${e => this._button("RED")}></button>
                    </div>
                    <div class="grid-item">
                      <button class="btn_source ripple" style="background-color: green; height: 22px;" @click=${e => this._button("GREEN")}></button>
                    </div>
                    <div class="grid-item">
                      <button class="btn_source ripple" style="background-color: yellow; height: 22px;" @click=${e => this._button("YELLOW")}></button>
                    </div>
                    <div class="grid-item">
                      <button class="btn_source ripple" style="background-color: blue; height: 22px;" @click=${e => this._button("BLUE")}></button>
                    </div>
                  </div>
                  ` : html`
                  `}
<!-- ################################# COLORED BUTTONS END ################################# -->

                  <div class="grid-container-bottom">
                    <div class="grid-item">
                      <button class="btn ripple"  style="border-radius: 50% 50% 0px 0px;" @click=${() => this._media_player_service("volume_up")}><ha-icon icon="mdi:plus"/></button>
                    </div>
                    <div class="grid-item" style="margin-top: 0px;">
                      <button class="btn-flat ripple" @click=${() => this._button("HOME")}><ha-icon icon="mdi:home"></button>
                    </div>
                    <div class="grid-item">
                      <button class="btn ripple" style="border-radius: 50% 50% 0px 0px;" @click=${() => this._button("CHANNELUP")}><ha-icon icon="mdi:chevron-up"/></button>
                    </div>

                    <div class="grid-item">
                      <button class="btn" style="border-radius: 0px; cursor: default;"><ha-icon icon="${stateObj.attributes.is_volume_muted === true ? 'mdi:volume-off' : 'mdi:volume-high'}"/></button>
                    </div>
                    <div class="grid-item">
                      <button class="btn ripple" Style="color:${stateObj.attributes.is_volume_muted === true ? 'red' : ''};" @click=${() => this._button("MUTE")}><span class="${stateObj.attributes.is_volume_muted === true ? 'blink' : ''}"><ha-icon icon="mdi:volume-mute"></span></button>
                    </div>
                    <div class="grid-item">
                      <button class="btn" style="border-radius: 0px; cursor: default;"><ha-icon icon="mdi:parking"/></button>
                    </div>

                    <div class="grid-item">
                      <button class="btn ripple" style="border-radius: 0px 0px 50% 50%;" @click=${() => this._media_player_service("volume_down")}><ha-icon icon="mdi:minus"/></button>
                    </div>
                    <div class="grid-item" style="margin-bottom: 0px;">
                      <button class="btn-flat ripple" @click=${() => this._button("INFO")}><ha-icon icon="mdi:information-variant"/></button>
                    </div>
                    <div class="grid-item">
                      <button class="btn ripple" style="border-radius: 0px 0px 50% 50%;"  @click=${() => this._button("CHANNELDOWN")}><ha-icon icon="mdi:chevron-down"/></button>
                    </div>

                    <div class="grid-item">
                    </div>
                    <div class="grid-item">
                    </div>
                    <div class="grid-item">
                    </div>

<!-- ################################# MEDIA CONTROL ################################# -->
                    <div class="grid-item">
                      <button class="btn-flat ripple"  @click=${() => this._command("media.controls/play")}><ha-icon icon="mdi:play"/></button>
                    </div>
                      <div class="grid-item">
                      <button class="btn-flat ripple"  @click=${() => this._command("media.controls/pause")}><ha-icon icon="mdi:pause"/></button>
                    </div>
                    <div class="grid-item ">
                      <button class="btn-flat ripple"  @click=${() => this._command("media.controls/stop")}><ha-icon icon="mdi:stop"/></button>
                    </div>
                    <div class="grid-item">
                      <button class="btn-flat ripple"  @click=${() => this._command("media.controls/rewind")}><ha-icon icon="mdi:skip-backward"/></button>
                    </div>
                      <div class="grid-item">
                      <button class="btn-flat ripple" style="color: red;" @click=${() => this._command("media.controls/Record")}><ha-icon icon="mdi:record"/></button>
                    </div>
                    <div class="grid-item ">
                      <button class="btn-flat ripple"  @click=${() => this._command("media.controls/fastForward")}><ha-icon icon="mdi:skip-forward"/></button>
                    </div>
<!-- ################################# MEDIA CONTROL END ################################# -->

                  </div>

              `}
              </div>
              </div>
            `;


    }

    updated() {
    }


    _123() {
        this.hass.callService("browser_mod", "popup",
            {
                "card": {
                    "type": "custom:card-numeric-pad",
                    "entity": this.config.entity
                },
                "deviceID": ["this"],
                "title": " ",
                "style": {
                    "border-radius": "15px"
                }
            }
        )
    }

    _channelList() {
        this.hass.callService("browser_mod", "popup",
            {
                "card": {
                    "type": "custom:card-channel-pad",
                    "entity": this.config.entity,
                    "channels": this.config.channels
                },
                "deviceID": [
                    "this"
                ],
                "title": " ",
                "large": true,
                "style": {
                    "border-radius": "15px"
                }
            }
        )
    }

    _button(button) {
        this.hass.callService("webostv", "button", {
            entity_id: this.config.entity,
            button: button
        });
    }

    _command(command) {
        this.hass.callService("webostv", "command", {
            entity_id: this.config.entity,
            command: command
        });
    }

    _media_player_service(service) {
        this.hass.callService("media_player", service, {
            entity_id: this.config.entity,
        });
    }

    _select_source(source) {
        this.hass.callService("media_player", "select_source", {
            entity_id: this.config.entity,
            source: source
        });
    }

    _select_sound_output(sound_output) {
        this.hass.callService("webostv", "select_sound_output", {
            entity_id: this.config.entity,
            sound_output: sound_output
        });
        this._show_sound_output = false;
    }

    _smart() {
        this.hass.callService("webostv", "command", {
            entity_id: this.config.entity,
            command: "tv/getChannelList"
        });
    }

    _smart2() {
        this.hass.callService("webostv", "button", {
            entity_id: this.config.entity,
            button: "TV_CHANNEL_DOWN"
        });
    }

    _input() {
        this.hass.callService("webostv", "button", {
            entity_id: this.config.entity,
            button: "GET_SYSTEM_SETTINGS"
        });
    }

    setConfig(config) {
        if (!config.entity) {
            console.log("Invalid configuration");
        }
        this.config = config;
    }

    getCardSize() {
        return 15;
    }

    static getIcon(iconName) {
        return Object.keys(LgRemoteControl.iconMapping).includes(iconName)
            ? LgRemoteControl.iconMapping[iconName]
            : html`<ha-icon icon="${iconName}"/>`;
    }

    static get styles() {
        return css`
  button:focus {outline:0;}

  /*Create ripple effec*/
  
  .ripple {
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
  }
  
  .ripple:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #7a7f87 2%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .5s, opacity 1s;
  }
  
  .ripple:active:after {
    transform: scale(0, 0);
    opacity: .3;
    transition: 0s;
  }
  .blink {
    animation: blinker 1.5s linear infinite;
    color: red;
    }
    @keyframes blinker {  
    50% { opacity: 0; }
    }

  .card {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .page {
    background-color: var(--remote-color);
    width:300px;
    height: 100%;
    display: inline-block;
    flex-direction: row;
    border: 1px solid var(--app-header-text-color);
    border-radius: 35px;
    padding-bottom: 20px;
  }

  .grid-container-power {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 86px;
    background-color: transparent;
    padding: 7px 20px 0px 20px;
    overflow: hidden;
  }

  .grid-container-cursor {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    background-color: transparent;
    padding: 0px 20px 0px 20px;
    margin-bottom: 7px;
    overflow: hidden;
    height: 260px;
  }

  .grid-container-keypad {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 65px 65px 65px 65px;
    background-color: transparent;
    margin: 0px 31px 0px 31px;
    margin-bottom: 7px;
    overflow: hidden;
    background-color: var(--remote-button-color);
    border-radius: 35px;
  }

  .grid-container-input {
    display: grid;
    grid-template-columns: 33% 34% 33%;
    grid-template-rows: 86px 43px 519px;
    background-color: transparent;
    padding: 0px 20px 0px 20px;
    overflow: hidden;
  }
  .grid-container-sound {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 86px 15px 41px 41px 41px 41px 2px;
    background-color: transparent;
    padding: 0px 31px 0px 31px;
    overflow: hidden;
    margi
  }
  .grid-container-source {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: 56px;
    background-color: transparent;
    padding: 0px 20px 0px 20px;
    overflow: hidden;
  }

  .grid-container-bottom{
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 60px 60px 60px 20px 50px 50px;
    background-color: transparent;
    padding: 25px 20px 0px 20px;
    overflow: hidden;
  }

  .grid-item {
    background-color: transparent;
    margin: auto;
    overflow: hidden;
  }
  .grid-item_sound_back {
    background-color: transparent;
    margin: auto;
    margin-left: 0px;
    overflow: hidden;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .grid-item-input{
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
    grid-template-columns: auto auto ;
    grid-template-rows: 60px;
    background-color: transparent;
    margin: auto;
    overflow: scroll;
    height: 505px;
    margin-top: 30px;
    
    
  }

  .grid-item_sound_icon_text {
    background-color: transparent;
    margin-top:35px;
    margin-left: 0px;
    overflow: hidden;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .grid-item-input::-webkit-scrollbar {
    display: none;
  }
  .grid-item-input::-webkit-scrollbar {
    -ms-overflow-style: none;
  }

  .shape {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 4;
    
  }
  .shape-input {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
    
  }
  .shape-sound {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 6;
    
  }
  .shape-input-background {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
    background-color: var(--remote-button-color);
    border-radius: 0px 0px 35px 35px;
    
  }

  .hdmi-container {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 4;
    display: block:
    width: 100%;
    margin: auto;
    
  }

  .source_text {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    text-align: center;
    margin-top: 25px;
    font-size: 30px;

    opacity: 0.3;
  }


 

  .go_back_right {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .item_1_sx{
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .item_1_c {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .item_1_dx {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .item_2_sx{
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  .item_2_c {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  .item_2_dx {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .item_3_sx {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
  }
  .item_3_c {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
  }
  .item_3_dx {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
  }
  .item_4_sx {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;
  }
  .item_4_c {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
  }

  .item_5_sx {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 5;
    grid-row-end: 6;
  }
  .item_5_c {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 6;
  }

  .item_6_sx {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 6;
    grid-row-end: 7;
  }
  .item_6_c {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 6;
    grid-row-end: 7;
  }


 
  .btn {
    background-color: var(--remote-button-color);
    color: var(--remote-text-color);
    font-size: 14px;
    width: 60px;
    height: 60px;
    border-width: 0px;
    border-radius: 50%;
    margin: auto;
    place-items: center;
    display: inline-block;
    cursor: pointer;
    
  }  
  
  .btn-keypad {
    background-color: transparent;
    color: var(--remote-text-color);
    font-size: 26px;
    width: 100%;
    height: 100%;
    border-width: 0px;
    border-radius: 80
  }

  .btn_source {
    background-color: var(--remote-button-color);
    color: var(--remote-text-color);
    font-size: 10px;
    width: 42px;
    height: 32px;
    border-width: 0px;
    border-radius: 15px;
    margin: auto;
    place-items: center;
    display: inline-block;
    cursor: pointer;
    
  }
  .btn_hdmi-sound {
    background-color: var(--remote-button-color);
    color: var(--remote-text-color);
    font-size: 14px;
    width: 240px;
    height: 36px;
    border-width: 0px;
    border-radius: 15px;
    margin:  10px auto;
    place-items: center;
    display: block;
    cursor: pointer;
    border: solid 2px var(--remote-color);
  }
    .btn_hdmi-sound-on {
    background-color: var(--primary-color);
    color: #ffffff;
    font-size: 14px;
    width: 246px;
    height: 42px;
    border-width: 0px;
    border-radius: 15px;
    margin: auto;
    place-items: center;
    display: block;
    cursor: pointer;
    
  }

  .btn_soundoutput {
    font-size: 26px;
    width: 100px;
    height: 40px;
    border-width: 0px;
    margin-left: 0px;
    display: block;
    cursor: pointer;
    background-color: transparent;
    opacity: 0.4;
    color: var(--remote-text-color)
    font-weight: bold;

  }


  .btn_sound_on {
    font-size: 12px;
    width: 100px;
    height: 32px;
    border-width: 0px;
    border-radius: 15px;
    margin: auto;
    display: block;
    cursor: pointer;
    background-color: var(--primary-color);
    color: #ffffff;

  }
  .btn_sound_off {
    font-size: 12px;
    width: 100px;
    height: 32px;
    border-width: 0px;
    border-radius: 15px;
    margin: auto;
    display: block;
    cursor: pointer;
    background-color: var(--remote-button-color);
    color: var(--remote-text-color);
    border: solid 2px var(--remote-color);
  }

  .overlay {
    background-color: rgba(0,0,0,0.02)
  }

  .btn-flat {
    background-color: var(--remote-button-color); //rgba(255, 0, 0, 1);
    color: var(--remote-text-color);
    font-size: 14px;
    width: 60px;
    height: 32px;
    border-width: 0px;
    border-radius: 15px;
    margin: auto;
    display :grid;
    place-items: center;
    display: inline-block;
    cursor: pointer;
    
  }

  .bnt_ok {
    width: 80px;
    height:80px;
    font-size: 18px;
    border: solid 2px var(--remote-color);

  }

  `;
    }

}

customElements.define('lg-remote-control', LgRemoteControl);
