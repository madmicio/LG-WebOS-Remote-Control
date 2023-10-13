var LitElement = LitElement || Object.getPrototypeOf(customElements.get("ha-panel-lovelace"));
var html = LitElement.prototype.html;
var css = LitElement.prototype.css;

class LgRemoteControl extends LitElement {

    static get disneyIcon() {
        return html`<svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;" xml:space="preserve">
              <style type="text/css">
              .st0{fill:var(--remote-text-color);}
              </style>
              <g transform="translate(0.000000,168.000000) scale(0.100000,-0.100000)">
              <path class="st0" d="M192.9,1646.8c-2.4-1.6-2.1-9.3,0.7-18.7c1-3.1-0.2-4.2-8.7-7.7c-8.7-3.5-9.8-4.5-9.3-8.6
              c0.7-5.8,5.9-6.8,15.5-3c3.8,1.6,7.2,2.8,7.5,2.8c0.5,0,2.1-4,3.7-8.7c3.3-10.1,7.5-13.3,12.4-9.8c3,2.3,3,3.3,1.2,10.1
              c-1,4-2.4,8.7-3.1,10.3c-0.7,2.1,1,3.5,7.3,5.8c12.2,4.4,13.6,5.4,13.6,10c0,5.4-6.6,6.5-17.8,2.6c-4.5-1.6-8.2-2.8-8.4-2.8
              s-1.4,3.3-2.4,7.5C201.6,1647.8,198.7,1650.4,192.9,1646.8z"/>
              <path class="st0" d="M97.2,1581.1c-19.7-5.4-30.2-13.4-30.2-23.1c0-5.9,1.4-6.6,7.9-4c3.3,1.2,3.3,1.4-0.9,3.1l-4.4,1.6l5.8,3.5
              c10.7,6.5,29.9,9.8,51.5,8.7c22.2-1,35.4-4,51.9-12c20.1-9.8,34.9-28.8,34.9-44.9c0-6.8-6.6-18.7-13.3-23.7
              c-13.1-10-34.9-17.3-38.6-12.7c-1,1.2-3.8,8.6-6.3,16.2c-2.4,7.7-4.9,15.4-5.6,16.9c-1.6,4,9.6,7,23.2,6.3l10-0.5l-0.5-5.6
              c-0.7-7,3.1-7.9,7.3-1.9c4.2,5.8,3.5,12.4-1.7,17.3c-3.8,3.5-6.1,4.2-16.1,4.2c-6.5,0-15-0.7-19-1.4l-7.5-1.6l-4,9.4
              c-2.3,5.1-5.9,10.8-8,12.6c-3.7,3.3-3.7,3.3-3.7-1.9c0-2.8,0.9-9.8,2.1-15.4l1.9-10.1l-5.1-3.5c-11.9-8.4-19.9-18.2-19.9-23.7
              c0-8.9,12.4-18.5,32.8-25.7c6.8-2.3,10.1-4.7,12.6-8.9c1.9-3.1,4.2-5.8,5.1-5.8c4.2,0,7.2,2.4,7.2,6.1c0,3.5,1.2,4.2,10.3,5.8
              c30.2,5.4,51.2,28.5,48.5,53.8c-2.3,22.5-19.6,40.5-50.6,53.1C149.2,1583.4,117.8,1586.5,97.2,1581.1z M142.4,1493.4l4.4-15.4
              l-5.8-0.5c-6.5-0.5-24.4,7.5-27.6,12.2c-1.4,2.3-1,3.8,1.6,6.6c3.5,4,17.6,12,21.1,12.2C137.2,1508.6,140,1501.8,142.4,1493.4z"/>
              </g>
              </svg>
     `;
    }

    static get daznIcon() {
        return html`<svg version="1.0" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 30.7 30.7" style="enable-background:new 0 0 30.7 30.7;" xml:space="preserve">
              <style type="text/css">
              .st0{fill:var(--remote-text-color);}
              </style>
              <g transform="translate(0.500000,321.700000) scale(0.100000,-0.100000)">
              <path class="st0" d="M64.5,3165.6c-0.3-0.2-0.4-17.9-0.4-39.2v-38.9l5.4-5.4l5.4-5.5l-5.4-5.5l-5.4-5.6v-39.2v-39.2h89.5h89.5v39.2
              v39.3l-5.4,5.5l-5.5,5.5l5.5,5.4l5.4,5.4l-0.1,39.2l-0.2,39.2l-88.9,0.2C105,3165.9,64.7,3165.8,64.5,3165.6z M234.2,3123.8l0.1-33
              l-7.2-7.3l-7.2-7.3l7.2-7.3l7.2-7.2v-33v-33l-80.6,0.1l-80.6,0.2l-0.2,32.9l-0.1,32.9l7.3,7.3l7.4,7.4l-7.4,7.4l-7.3,7.3v32.6
              c0,17.9,0.2,32.8,0.4,33c0.2,0.3,36.5,0.4,80.6,0.3l80.2-0.2L234.2,3123.8z"/>
              <path class="st0" d="M102.2,3111.8v-24.7h14.9h14.8l5.5,5.5l5.4,5.4v13.8v13.8l-5.4,5.4l-5.5,5.5h-14.8h-14.9V3111.8z
              M131.1,3124.8l3-2.9v-10v-10l-2.9-3l-2.9-3h-8.6h-8.6v15.5c0,8.6,0.2,15.8,0.4,16c0.2,0.3,4.1,0.4,8.6,0.4h8.1L131.1,3124.8z"/>
              <path class="st0" d="M180.6,3135.6c-0.6-1.1-4.3-9.8-13.4-31.8c-2.7-6.5-5.3-12.8-5.8-14s-0.9-2.2-0.9-2.3c0-0.2,2.1-0.3,4.7-0.3
              h4.6l1.4,3.1l1.3,3.1h12.4h12.3l1.3-3.1l1.3-3.1h4.8c3.6,0,4.7,0.2,4.4,0.8c-0.2,0.4-1.3,3-2.5,5.8c-1.9,4.6-4.3,10.3-14.4,34.4
              l-3.4,8.1l-3.8,0.2C181.9,3136.6,181.1,3136.4,180.6,3135.6z M189.4,3112.1l4.1-9.9h-8.7h-8.7l1.3,3c0.7,1.6,2.6,6.3,4.2,10.3
              c1.6,4,3.2,7.1,3.4,6.9C185.2,3122.1,187.2,3117.4,189.4,3112.1z"/>
              <path class="st0" d="M102.5,3064.8c-0.1-0.4-0.2-2.3-0.1-4.3l0.2-3.6l12.7,0.1c6.9,0,12.6-0.1,12.6-0.3c0-0.3-2.3-3.3-5.1-6.7
              c-2.9-3.4-5.9-7.2-6.8-8.3c-0.8-1.1-4.3-5.3-7.6-9.3l-6.1-7.4v-4.3v-4.3h18.8h18.8v4.4v4.4H127h-12.8l1.2,1.8
              c0.7,0.9,6.5,8,12.9,15.8l11.6,14.1l-0.2,4.3l-0.1,4.3l-18.4,0.1C108.1,3065.4,102.7,3065.3,102.5,3064.8z"/>
              <path class="st0" d="M164.4,3065.3c-0.1-0.1-0.3-11.2-0.3-24.6v-24.3h4.4h4.4l0.1,15.8l0.2,15.7l11-15.7l11-15.7l4.9-0.1h4.8v24.3
              c0,13.4-0.1,24.5-0.3,24.6c-0.1,0.1-2.1,0.1-4.4,0.1l-4.1-0.3l-0.1-17l-0.2-17.1l-12.1,17.3l-12,17.3h-3.5
              C166.4,3065.6,164.7,3065.4,164.4,3065.3z"/>
              </g>
              </svg>
     `;
    }

    static get nowTv() {
        return html`
              <svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 30 30.7" style="enable-background:new 0 0 30 30.7;" xml:space="preserve">
              <style type="text/css">
              .st0{fill:var(--remote-text-color);}
              </style>
              <g transform="translate(1.00000,100.000000) scale(0.100000,-0.100000)">
              <path class="st0" d="M97.6,888.8C84,884,75.1,872.9,73.6,859c-1.5-14.5,8.8-30.3,22.9-35.1c7-2.4,19.6-1.5,25.9,1.8
              c6.5,3.3,12.7,9.7,15.7,16c2.1,4.5,2.5,6.6,2.5,14.3c0,7.8-0.4,9.8-2.6,14.5C131.2,885.4,112.2,893.9,97.6,888.8z"/>
              <path class="st0" d="M58.1,888.2c-4.9-1.5-6.6-4.8-9.1-16.3l-2.2-10.5L38.6,874c-4.5,6.9-9.1,13-10.1,13.6
              c-4.9,2.7-13.4,0.1-14.8-4.5c-1.2-3.8-10.1-48.4-10.1-50.6c0-1.3,1.3-3.6,3.2-5.5c4.3-4.3,9.7-4.6,13.9-0.6c2.5,2.2,3.2,4,5.1,12.8
              c1.1,5.5,2.4,10.4,2.7,10.8c0.4,0.3,3.5-4.1,7.1-9.7c9-14.1,11.3-16.5,16.3-16.5c4.8,0,8.4,2.6,9.8,7c1.8,5.4,9.7,44.9,9.7,48.4
              C71.4,885.7,64.6,890.4,58.1,888.2z"/>
              <path class="st0" d="M246,888.9c-0.9-0.2-1.9-1.3-2.3-2.4c-0.9-2.8,1.8-4.6,7-4.6h4l0.3-12.6l0.3-12.7h2.9h2.9l0.3,12.7l0.3,12.7
              l4.3-0.3l4.4-0.3l5-12.4c4.4-11.2,5.2-12.4,7.4-12.7c2.4-0.3,2.8,0.4,8.5,14.5c3.2,8.2,5.6,15.6,5.4,16.4c-0.4,1-1.4,1.3-3.2,1.1
              c-2.4-0.3-3.1-1.2-6.4-9.7c-2.1-5.1-4.1-9-4.5-8.6c-0.3,0.5-2,4.4-3.6,8.9c-1.7,4.5-3.8,8.7-4.7,9.4
              C272.7,889.5,250,889.9,246,888.9z"/>
              <path class="st0" d="M148.5,886.3c-1.3-1.2-2.8-3.5-3.2-5.1c-0.9-3.2,4.8-44.8,6.9-50.7c1.7-4.6,5.1-6.9,10.2-6.9
              c4.8,0,7.3,2.5,16.5,16.7c4.6,7.1,8.5,12.7,8.7,12.5c0.2-0.1,2.3-5.8,4.6-12.6c5-14.3,6.9-16.6,13.4-16.6c3,0,4.9,0.6,6.6,2.2
              c1.3,1.1,7.6,12.6,14.1,25.5c13.5,26.9,14.1,29.6,8.6,34.5c-3.6,3.2-9.7,3.8-13.4,1.2c-1.1-0.8-4.8-6.7-8-13.1l-5.7-11.6l-3.6,10.2
              c-4.9,13.9-6.5,15.9-13.2,16c-2.3,0-5-0.4-5.9-1c-1-0.5-5.1-6.1-9.3-12.5l-7.5-11.6l-1.1,7.8c-1.5,11-1.9,12.3-4.8,14.9
              c-1.9,1.7-3.5,2.3-7,2.3C152,888.6,150.4,888,148.5,886.3z"/>
              </g>
              </svg>
     `;
    }

    static get tvoptic() {
        return html`<svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 567 171" style="enable-background:new 0 0 567 171;" xml:space="preserve">
              <style type="text/css">
              .st0{fill:var(--remote-text-color);}
              </style>
              <g transform="translate(0.000000,161.000000) scale(0.100000,-0.100000)">
              <path class="st0" d="M1408,1423l-188-188l-103,103c-108,108-136,122-170,84s-22-62,85-169l103-103H866c-303,0-316-3-367-73l-29-40
              V630c0-407,0-407,23-441c12-18,38-44,56-56l34-23h637h637l34,23c18,12,44,38,56,56c23,34,23,34,23,441v407l-29,40
              c-51,70-64,73-367,73h-268l192,193c106,106,192,200,192,208c0,30-30,59-63,59C1599,1610,1573,1588,1408,1423z M1417,1006
              c61-19,106-66,125-128c8-29,13-112,13-248c0-235-11-287-70-338c-56-49-110-57-410-57c-301,0-354,7-411,57s-69,110-69,338
              c1,384,27,403,540,395C1308,1022,1378,1018,1417,1006z M1809,845c16-8,31-22,35-30c33-86-56-160-127-105c-48,38-41,110,13,137
              C1762,863,1775,863,1809,845z M1809,615c75-38,43-155-42-155s-113,119-37,157C1762,633,1775,633,1809,615z"/>
              <path class="st0" d="M2780,880V770h-110h-110v-75v-75h110h110V510V400h80h80v110v110h110h110v75v75h-110h-110v110v110h-80h-80V880z
              "/>
              <path class="st0" d="M3896,349.1l-45.7-46.6l51.9-52.8c29-29,56.3-52.8,61.6-52.8c5.3,0,28.1,19.3,51,42.2l42.2,43.1l-57.2,57.2
              l-57.2,57.2L3896,349.1z"/>
              <path class="st0" d="M4628.5,1327.9l-64.2-65.1l-32.5,13.2c-43.1,18.5-124.9,17.6-153.9-2.6c-73.9-47.5-64.2-163.6,25.5-307.8
              c109-174.1,319.2-328.9,427.4-315.7c36.1,5.3,87.1,40.5,107.3,73.9c18.5,31.7,19.3,91.5,1.8,141.6c-15,43.1-22,30.8,68.6,125.8
              c35.2,37.8,41.3,49.2,41.3,80c0,29.9-6.2,41.3-36.9,73l-36.9,37.8l22,23.7c36.1,38.7,51.9,66.8,51.9,88.8
              c0,51-62.4,106.4-107.3,95.9c-11.4-3.5-39.6-21.1-61.6-40.5l-39.6-35.2l-38.7,39.6c-32.5,33.4-43.1,38.7-73.9,38.7
              C4696.2,1393,4687.4,1387.7,4628.5,1327.9z M4781.5,1305.9c23.7-26.4,24.6-26.4,9.7-57.2c-20.2-44-17.6-61.6,15.8-96.7
              c23.7-25.5,36.1-31.7,62.4-31.7c19.3,0,40.5,6.2,50.1,15c15,14.1,17.6,13.2,46.6-15c16.7-16.7,30.8-37.8,30.8-47.5
              c0-9.7-15-32.5-32.5-51l-32.5-33.4l-143.3,142.5l-143.3,142.5l28.1,29C4710.3,1340.2,4746.4,1341.1,4781.5,1305.9z M4986.4,1320.9
              c20.2-20.2,10.6-39.6-45.7-93.2c-56.3-54.5-69.5-60.7-91.5-46.6c-26.4,16.7-16.7,40.5,36.1,95.9
              C4939,1331.4,4964.5,1342.9,4986.4,1320.9z M4675.1,1172.3l61.6-61.6l-49.2-49.2l-49.2-49.2l-64.2,63.3l-64.2,63.3l47.5,47.5
              c26.4,26.4,50.1,48.4,52.8,48.4C4612.7,1234.7,4641.7,1206.6,4675.1,1172.3z M4844.9,902.3l-45.7-45.7l-61.6,61.6l-61.6,61.6
              l46.6,46.6l46.6,47.5l60.7-62.4l60.7-62.4L4844.9,902.3z"/>
              <path class="st0" d="M4122,921.6c-92.3-133.7-163.6-246.2-172.4-271.7c-41.3-119.6,33.4-276.1,164.5-343
              c44.8-22.9,61.6-26.4,122.2-26.4h71.2l80,52.8c232.2,152.1,397.5,264.7,401.9,275.3c2.6,6.2,1.8,9.7-2.6,6.2
              c-15-8.8-118.7,35.2-182,77.4c-34.3,22.9-92.3,72.1-128.4,109.9c-100.3,104.7-144.2,175.9-178.5,286.7l-18.5,60.7L4122,921.6z"/>
              </g>
              </svg>
     `;
    }

    static get tvheadphone() {
        return html`    
              <svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 567 171" style="enable-background:new 0 0 567 171;" xml:space="preserve">
              <style type="text/css">
              .st0{fill:var(--remote-text-color);}
              </style>
              <g transform="translate(0.000000,151.000000) scale(0.090000,-0.090000)">
              <path class="st0" d="M1408,1423l-188-188l-103,103c-108,108-136,122-170,84s-22-62,85-169l103-103H866c-303,0-316-3-367-73l-29-40
              V630c0-407,0-407,23-441c12-18,38-44,56-56l34-23h637h637l34,23c18,12,44,38,56,56c23,34,23,34,23,441v407l-29,40
              c-51,70-64,73-367,73h-268l192,193c106,106,192,200,192,208c0,30-30,59-63,59C1599,1610,1573,1588,1408,1423z M1417,1006
              c61-19,106-66,125-128c8-29,13-112,13-248c0-235-11-287-70-338c-56-49-110-57-410-57c-301,0-354,7-411,57s-69,110-69,338
              c1,384,27,403,540,395C1308,1022,1378,1018,1417,1006z M1809,845c16-8,31-22,35-30c33-86-56-160-127-105c-48,38-41,110,13,137
              C1762,863,1775,863,1809,845z M1809,615c75-38,43-155-42-155s-113,119-37,157C1762,633,1775,633,1809,615z"/>
              <path class="st0" d="M2780,880V770h-110h-110v-75v-75h110h110V510V400h80h80v110v110h110h110v75v75h-110h-110v110v110h-80h-80V880z
              "/>
              <path class="st0" d="M4450,1418.9c-338.9,0-610-271.1-610-610V334.4c0-112.3,91-203.3,203.3-203.3h203.3v542.2h-271.1v135.6
              c0,262,212.4,474.4,474.4,474.4s474.4-212.4,474.4-474.4V673.3h-271.1V131.1h203.3c112.3,0,203.3,91,203.3,203.3v474.4
              C5060,1147.8,4786.9,1418.9,4450,1418.9z"/>
              </g>
              </svg>`;
    }

    static get optic() {
        return html`<svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 567 171" style="enable-background:new 0 0 567 171;" xml:space="preserve">
              <style type="text/css">
              .st0{fill:var(--remote-text-color);}
              </style>
              <g transform="translate(0.000000,171.000000) scale(0.100000,-0.100000)">
              <path class="st0" d="M2281,410.7l-45.7-46.6l51.9-52.8c29-29,56.3-52.8,61.6-52.8s28.1,19.3,51,42.2l42.2,43.1l-57.2,57.2
              l-57.2,57.2L2281,410.7z"/>
              <path class="st0" d="M3013.5,1389.5l-64.2-65.1l-32.5,13.2c-43.1,18.5-124.9,17.6-153.9-2.6c-73.9-47.5-64.2-163.6,25.5-307.8
              c109-174.1,319.2-328.9,427.4-315.7c36.1,5.3,87.1,40.5,107.3,73.9c18.5,31.7,19.3,91.5,1.8,141.6c-14.9,43.1-22,30.8,68.6,125.8
              c35.2,37.8,41.3,49.2,41.3,80c0,29.9-6.2,41.3-36.9,73l-36.9,37.8l22,23.7c36.1,38.7,51.9,66.8,51.9,88.8
              c0,51-62.4,106.4-107.3,95.9c-11.4-3.5-39.6-21.1-61.6-40.5l-39.6-35.2l-38.7,39.6c-32.5,33.4-43.1,38.7-73.9,38.7
              C3081.2,1454.6,3072.4,1449.3,3013.5,1389.5z M3166.5,1367.5c23.7-26.4,24.6-26.4,9.7-57.2c-20.2-44-17.6-61.6,15.8-96.7
              c23.7-25.5,36.1-31.7,62.4-31.7c19.3,0,40.5,6.2,50.1,15c14.9,14.1,17.6,13.2,46.6-15c16.7-16.7,30.8-37.8,30.8-47.5
              c0-9.7-14.9-32.5-32.5-51l-32.5-33.4l-143.3,142.5L3030.2,1335l28.1,29C3095.3,1401.8,3131.4,1402.7,3166.5,1367.5z M3371.4,1382.4
              c20.2-20.2,10.6-39.6-45.7-93.2c-56.3-54.5-69.5-60.7-91.5-46.6c-26.4,16.7-16.7,40.5,36.1,95.9
              C3324,1393,3349.5,1404.4,3371.4,1382.4z M3060.1,1233.8l61.6-61.6l-49.2-49.2l-49.2-49.2l-64.2,63.3l-64.2,63.3l47.5,47.5
              c26.4,26.4,50.1,48.4,52.8,48.4S3026.7,1268.1,3060.1,1233.8z M3229.9,963.8l-45.7-45.7l-61.6,61.6l-61.6,61.6l46.6,46.6l46.6,47.5
              l60.7-62.4l60.7-62.4L3229.9,963.8z"/>
              <path class="st0" d="M2507,983.2c-92.3-133.7-163.6-246.2-172.4-271.7c-41.3-119.6,33.4-276.1,164.4-343
              c44.9-22.9,61.6-26.4,122.2-26.4h71.2l80,52.8c232.2,152.1,397.5,264.7,401.9,275.3c2.6,6.2,1.8,9.7-2.6,6.2
              c-14.9-8.8-118.7,35.2-182,77.4c-34.3,22.9-92.3,72.1-128.4,109.9c-100.3,104.7-144.2,175.9-178.5,286.7l-18.5,60.7L2507,983.2z"/>
              </g>
              </svg>
         `;
    }

    static get arc() {
        return html`<svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 567 171" style="enable-background:new 0 0 567 171;" xml:space="preserve">
              <style type="text/css">
              .st0{fill:var(--remote-text-color);}
              </style>
              <g transform="translate(0.000000,150.000000) scale(0.100000,-0.100000)">
              <path class="st0" d="M1826.2,1247c-60-32-71-67-71-229V875h-280h-280V640V405h280h280V269c0-154,10-190,65-224c32-20,48-20,885-20
              h853l34,26c36,27,63,72,56,92c-4,9,37,12,184,12h189l42,85l42,85v323v322l-51,83l-51,82h-174c-158,0-175,2-180,18
              c-12,40-32,68-63,89l-34,23h-846C1905.2,1265,1858.2,1264,1826.2,1247z M3495.2,645V175h-790h-790v470v470h790h790V645z
              M3934.2,956c11-20,16-581,5-618c-6-22-10-23-145-23h-139v330v330h135C3911.2,975,3925.2,973,3934.2,956z M1755.2,650v-75h-200
              h-200v75v75h200h200V650z"/>
              <path class="st0" d="M2412.2,769c-4-4-7-22-7-41v-33h135h135v-55v-55h-85h-85v45v45h-50h-50v-78v-77l163,2c89,2,165,3,169,3
              c19,0,38,64,38,124c0,54-4,70-24,93l-24,28l-154,3C2489.2,775,2416.2,773,2412.2,769z"/>
              <path class="st0" d="M2810.2,762c-3-7-4-65-3-128l3-114l48-3l47-3v95v96h40h40v-95v-95h50h50v95v95h40h39l3-92l3-93l53-3l52-3v98
              c0,88-2,101-24,128l-24,30l-206,3C2854.2,776,2814.2,774,2810.2,762z"/>
              <path class="st0" d="M1995.2,640V515h55h55v45v45h83h82v-42v-43h50h50v120v120l-52,3l-53,3v-50v-51h-80h-80v50v50h-55h-55V640z"/>
              <path class="st0" d="M3305.2,640V515h50h50v125v125h-50h-50V640z"/>
              </g>
              </svg>`;
    }

    static get amazon() {
        return html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#44739e" viewBox="0 0 24 24"><path d="M20.182 5.404a4.05 4.05 0 0 0 .625.05 1.116 1.116 0 0 0 .342-.03.474.474 
                0 0 0 .404-.306.605.605 0 0 0 .015-.276.4.4 0 0 0-.243-.334.88.88 0 0 0-.281-.064.791.791 0 0 0-.833.499 1.438 1.438 0 0 0-.102.367c-.006.088-.006.088.073.094zm-1.074-.4a1.808 1.808
                0 0 1 1.633-1.359 2.38 2.38 0 0 1 1.057.102c.655.224 1.009.932.794 1.59a.986.986 0 0 1-.489.588 1.986 1.986 0 0 1-.66.211 3.534 3.534 0 0 1-1.207-.016 1.221 1.221 0 0 0-.146-.023.88.88 
                0 0 0 .716.954 2.58 2.58 0 0 0 .995 0c.154-.033.302-.065.456-.102.154-.036.218.012.218.17v.392a.242.242 0 0 1-.18.26 3.082 3.082 0 0 1-.626.17 3.247 3.247 0 0 1-1.214-.01 1.663 1.663 
                0 0 1-1.36-1.272 2.935 2.935 0 0 1 .016-1.656zm.317 6.367a2.588 2.588 0 0 1 1.012.039 1.936 1.936 0 0 1 1.41 1.635v.011h-.014v.1a.078.078 
                0 0 0 .024.08v-.021l.007.01v.61l-.012.021v-.01c-.03.02-.02.047-.02.08V14c-.048.9-.747 1.63-1.644 1.717a2.627 2.627 0 0 1-.998-.052 1.694 1.694 
                0 0 1-1.246-1.114 2.825 2.825 0 0 1 0-2.005c.219-.65.8-1.11 1.482-1.175zM12 3.946c0-.043.006-.086.016-.127a.156.156 0 0 1 .147-.102h.67a.19.19 
                0 0 1 .184.147c.028.075.044.147.07.223.053 0 .086-.036.122-.057a2.743 2.743 0 0 1 .946-.398 1.962 1.962 0 0 1 .795 0c.25.054.47.202.615.413a.25.25 
                0 0 0 .03.038v.014c.132-.079.271-.164.415-.237a2.382 2.382 0 0 1 1.203-.266 1.061 1.061 0 0 1 1.095 1.027v2.964c0 .238-.03.27-.27.27h-.647a.906.906
                0 0 1-.126 0 .147.147 0 0 1-.128-.122.994.994 0 0 1-.01-.175V5.101a.944.944 0 0 0-.033-.293.4.4 0 0 0-.36-.294 1.861 1.861 0 0 0-.912.176.087.087 
                0 0 0-.063.096v2.788a.774.774 0 0 1-.01.155c0 .07-.058.127-.128.127h-.81c-.197 0-.24-.047-.24-.243V5.1a1.24 1.24 0 0 0-.026-.276.4.4 0 0 0-.371-.318 1.874 1.874 
                0 0 0-.928.18.085.085 0 0 0-.059.103v2.833c0 .195-.044.236-.239.236h-.704c-.188 0-.235-.053-.235-.232zm2.71 9.92a.178.178 0 0 0-.074-.011 2 2 
                0 0 0 .057.324c.08.337.358.59.7.636a2.664 2.664 0 0 0 1.088-.037c.117-.026.229-.053.345-.085.154-.037.223.023.223.17v.385a.235.235 
                0 0 1-.19.271 3.36 3.36 0 0 1-1.141.217 2.901 2.901 0 0 1-.796-.079 1.63 1.63 0 0 1-1.215-1.136 2.946 2.946 0 0 1-.02-1.776 1.848 1.848 
                0 0 1 1.838-1.363c.268-.012.535.023.792.101.44.123.775.48.868.928a1.468 1.468 0 0 1 0 .587.983.983 0 0 1-.535.704 2.166 2.166 0 0 1-.891.23 4.15 4.15
                0 0 1-1.055-.067zm-3.133-2.202c.027-.037.012-.075.012-.112V9.847c0-.202.037-.238.238-.238h.734c.161.006.207.044.207.208v5.586c0 .147-.049.201-.196.201h-.69a.19.19 0 0 1-.186-.146.82.82 
                0 0 0-.057-.185c-.048.008-.069.045-.107.067a1.714 1.714 0 0 1-1.615.276 1.526 1.526 0 0 1-.917-.812 2.495 2.495 0 0 1-.266-1.13 2.999 2.999 
                0 0 1 .187-1.225 1.66 1.66 0 0 1 .826-.945c.552-.263 1.2-.22 1.713.111a.294.294 0 0 0 .117.059zm-.797-3.817h-.733a.32.32 0 0 1-.075 0 .147.147 
                0 0 1-.147-.137V3.893c0-.127.054-.176.18-.18a19.455 19.455 0 0 1 .828 0c.122 0 .159.037.17.158v3.67a.982.982 0 0 1-.01.176.134.134 
                0 0 1-.128.12.456.456 0 0 1-.089 0zm-1.045-5.45a.616.616 0 0 1 .642-.586h.064a.649.649 0 0 1 .248.036.6.6 0 0 1 .411.67.587.587 0 0 1-.506.534.963.963 
                0 0 1-.355 0 .587.587 0 0 1-.504-.66Zm-3.092 5.2V3.983c0-.244.026-.27.27-.27h.51a.211.211 0 0 1 .238.179c.037.132.07.264.1.408a.161.161 
                0 0 0 .091-.065 3.514 3.514 0 0 1 .303-.27 1.41 1.41 0 0 1 .964-.293c.138 0 .186.048.197.18.01.18 0 .367 0 .546a.985.985 0 0 1-.012.22.147.147 
                0 0 1-.147.146 1.812 1.812 0 0 1-.22 0 2.523 2.523 0 0 0-1.027.147c-.074.026-.074.079-.074.138v2.678a.13.13 0 0 1-.128.122.992.992 0 0 1-.132 0v.01h-.69a.784.784 
                0 0 1-.117 0 .147.147 0 0 1-.126-.132zm.904 3.228a.604.604 0 0 1-.192 0 .998.998 0 0 1-.176-.02.6.6 0 0 1-.466-.7.587.587 0 0 1 .567-.536.473.473 0 0 1 .111 0 .638.638 
                0 0 1 .313.054c.208.078.35.272.361.494a.624.624 0 0 1-.518.716zm.44.855v3.764a.147.147 0 0 1-.133.159h-.88a.147.147 0 0 1-.162-.128v-.026a.567.567 
                0 0 1 0-.1v-3.67c0-.164.045-.21.21-.21h.751c.164.007.211.054.211.218zm-1.711.047-.317.844-1.067 2.774c-.01.032-.027.063-.037.095a.261.261 0 0 1-.265.175h-.702a.294.294 
                0 0 1-.318-.218c-.133-.349-.27-.704-.403-1.055-.318-.832-.641-1.666-.96-2.504a.928.928 0 0 1-.069-.207c-.016-.105.021-.158.128-.158h.901c.128 
                0 .185.085.218.196.058.201.117.408.18.61.217.733.43 1.479.646 2.217h.01l.096-.308.733-2.46.031-.095a.214.214 0 0 1 .213-.147h.812c.2-.003.243.054.176.245zM1.786 3.82a.377.377 
                0 0 1 .318-.107h.488a.21.21 0 0 1 .234.18c.01.053.02.106.037.16a.022.022 0 0 0 .02.015.429.429 0 0 0 .11-.08 1.87 1.87 0 0 1 1.586-.354c.48.115.874.454 1.061.91a2.451 2.451 
                0 0 1 .205.798h-.008c.051.444.011.893-.118 1.321a1.942 1.942 0 0 1-.55.88c-.34.306-.795.448-1.248.388A1.776 1.776 0 0 1 3 7.564c-.039.033-.022.074-.022.113v1.506c0 .329 0 .329-.334.329h-.572a.294.294 
                0 0 1-.294-.126Zm19.37 15.225a.587.587 0 0 1-.176.2 11.64 11.64 0 0 1-1.962 1.247 15.499 15.499 0 0 1-4.152 1.406 18.226 18.226 0 0 1-2.51.27v.022h-.649v-.018c-.293-.014-.578-.026-.868-.047a15.349 15.349 
                0 0 1-2.296-.352 15.558 15.558 0 0 1-6.885-3.59c-.185-.164-.36-.333-.54-.503a.405.405 0 0 1-.101-.146.195.195 0 0 1 .098-.256.2.2 0 0 1 .147 0 1.21 1.21 0 0 1 .138.069 20.566 20.566 
                0 0 0 6.164 2.546 22.087 22.087 0 0 0 2.212.398 20.441 20.441 0 0 0 3.213.146 16.97 16.97 0 0 0 1.724-.146 20.908 20.908 0 0 0 3.935-.896 18.627 18.627 0 0 0 1.973-.776.44.44 0 0 1 .318-.043.33.33 
                0 0 1 .24.398.578.578 0 0 1-.022.066zm1.028 1.488a3.547 3.547 0 0 1-.615.757.432.432 0 0 1-.17.107.123.123 0 0 1-.169-.124.608.608 0 0 1 .038-.162c.185-.496.366-.99.51-1.504a5.346 5.346 
                0 0 0 .18-.859 1.65 1.65 0 0 0 0-.318.412.412 0 0 0-.294-.388 2.068 2.068 0 0 0-.509-.095 8.356 8.356 0 0 0-1.459.064l-.641.08c-.07 0-.132 0-.17-.065a.18.18 0 0 1 .014-.19.546.546 
                0 0 1 .162-.148 3.67 3.67 0 0 1 1.299-.562 6.412 6.412 0 0 1 1.097-.121c.346.001.691.042 1.028.121a1.515 1.515 0 0 1 .276.102c.121.05.206.162.219.293a2.157 2.157 0 0 1 .014.455 5.856 5.856 
                0 0 1-.806 2.55zm-2.55-5.72a.995.995 0 0 0 .301.01.691.691 0 0 0 .505-.293 1.01 1.01 0 0 0 .147-.308l-.009.014a1.924 1.924 0 0 0 .074-.678 2.449 2.449 0 0 0 0-.293 1.64 1.64 0 0 0-.147-.6.685.685 
                0 0 0-.483-.376.908.908 0 0 0-.302-.01.694.694 0 0 0-.542.328 1.163 1.163 0 0 0-.147.35 2.89 2.89 0 0 0-.042.933 1.494 1.494 0 0 0 .147.525c.09.207.276.355.497.397zm-3.523-1.96a.473.473 
                0 0 0-.394-.64c-.026 0-.047-.01-.073-.01a.797.797 0 0 0-.775.302 1.321 1.321 0 0 0-.211.578c-.015.047.01.069.058.073a4.705 4.705 0 0 0 .642.053c.11.006.22-.003.328-.026a.465.465 
                0 0 0 .425-.33zm-5.981-.255a1.174 1.174 0 0 0-.106.26 2.683 2.683 0 0 0-.065.997 1.48 1.48 0 0 0 .147.536.734.734 0 0 0 .568.391 1.306 1.306 0 0 0 .832-.158.147.147 
                0 0 0 .086-.147v-.966h.007c0-.323-.01-.641 0-.968a.147.147 0 0 0-.096-.156 1.614 1.614 0 0 0-.817-.147.678.678 0 0 0-.556.358zM3.855 7.051a.747.747 0 0 0 .488-.188.807.807 
                0 0 0 .243-.425 2.654 2.654 0 0 0 .065-1.002 1.505 1.505 0 0 0-.135-.54.653.653 0 0 0-.505-.382 1.44 1.44 0 0 0-.912.137.16.16 0 0 0-.105.164v1.917a.147.147 0 0 0 .09.147 1.468 1.468 0 0 0 .771.17"/>
                </svg>`;
    }

    static get lineout() {
        return html`<svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 567 171" style="enable-background:new 0 0 567 171;" xml:space="preserve">
              <style type="text/css">
              .st0{fill:var(--remote-text-color);}
              </style>
              <g transform="translate(0.000000,170.000000) scale(0.100000,-0.100000)">
              <path class="st0" d="M2523.2,1488.7c-10.2-10.2-13.6-31.4-13.6-93.4v-79.8h-50.9h-50.9V1273v-42.5h140.1h140.1v42.5v42.5H2637H2586
              v79.8c0,81.5-9.3,107-38.2,107C2541.9,1502.3,2530,1496.3,2523.2,1488.7z"/>
              <path class="st0" d="M3041.1,1488.7c-10.2-10.2-13.6-31.4-13.6-93.4v-79.8h-50.9h-50.9V1273v-42.5h140.1h140.1v42.5v42.5h-50.9
              H3104v79.8c0,81.5-9.3,107-38.2,107C3059.8,1502.3,3047.9,1496.3,3041.1,1488.7z"/>
              <path class="st0" d="M2356.8,1077.7c0-73,3.4-118.9,8.5-119.7c5.1-0.8,13.6-1.7,19.5-2.5c6.8-0.8,11-24.6,12.7-81.5
              c0.8-44.2,5.9-89.2,11-98.5c11-21.2,41.6-37.4,71.3-37.4c21.2,0,21.2-0.8,21.2-78.1c0.8-165.6,55.2-209.7,321.8-257.3
              c123.1-22.1,180.8-43.3,191-67.9c2.5-7.6,5.1-46.7,5.1-85.8v-71.3h50.9h50.9v280.2c0,272.5,0.8,280.2,17,280.2
              c25.5,0,56.9,17,67.1,37.4c5.1,9.3,10.2,54.3,11,98.5c2.5,76.4,3.4,80.7,22.1,83.2c18.7,2.5,18.7,5.1,18.7,121.4v118h-191h-191
              v-118c0-116.3,0-118.9,19.5-121.4c17.8-2.5,18.7-6.8,20.4-79c1.7-41.6,4.2-84.9,6.8-95.1c5.1-22.1,44.2-45,76.4-45h21.2V598
              c0-77.3-1.7-140.1-3.4-140.1c-1.7,0-17.8,5.1-35.7,11.9c-18.7,5.9-59.4,16.1-92.5,21.2c-208,36.5-259,53.5-280.2,95.1
              c-7.6,14.4-12.7,48.4-12.7,88.3c0,62.8,0,63.7,21.2,63.7c32.3,0,71.3,22.9,76.4,45c2.5,10.2,5.1,53.5,6.8,95.1
              c1.7,72.2,2.5,76.4,21.2,79c18.7,2.5,18.7,5.1,18.7,121.4v118h-191h-191V1077.7z"/>
              </g>
              </svg>
     `;
    }

    static get iconMapping() {
        return {
            "disney": this.disneyIcon,
            "dazn": this.daznIcon,
            "nowtv": this.nowTv,
            "amazon": this.amazon,
        };
    }

    static get properties() {
        return {
            hass: {},
            config: {},
            _show_inputs: {},
            _show_sound_output: {},
            _show_text: {},
            _show_keypad: {},
            _show_vol_text: {},
            volume_value: { type: Number, reflect: true },
            output_entity: { type: Number, reflect: true }
        };
    }

    constructor() {
        super();
        this._show_inputs = false;
        this._show_sound_output = false;
        this._show_text = false;
        this._show_keypad = false;
        this._show_vol_text = false;
        this.volume_value = 0;
        this.soundOutput = "";

    }

    render() {
        const stateObj = this.hass.states[this.config.entity];
        const colorButtons = this.config.color_buttons === "enable";

        const borderWidth = this.config.dimensions && this.config.dimensions.border_width ? this.config.dimensions.border_width : "1px";
        const scale = this.config.dimensions && this.config.dimensions.scale ? this.config.dimensions.scale : 1;
        const remoteWidth = Math.round(scale * 260) + "px";
        const tv_name_color = this.config.tv_name_color ? this.config.tv_name_color : "var(--primary-text-color)";
        const backgroundColor = this.config.colors && this.config.colors.background ? this.config.colors.background : "var( --ha-card-background, var(--card-background-color, white) )";
        const borderColor = this.config.colors && this.config.colors.border ? this.config.colors.border: "var(--primary-text-color)";
        const buttonColor = this.config.colors && this.config.colors.buttons ? this.config.colors.buttons : "var(--secondary-background-color)";
        const textColor = this.config.colors && this.config.colors.texts ? this.config.colors.texts : "var(--primary-text-color)";
        const mac = this.config.mac;
        
        if (this.config.ampli_entity &&
            (this.hass.states[this.config.entity].attributes.sound_output === 'external_arc' ||
             this.hass.states[this.config.entity].attributes.sound_output === 'external_optical')) {

                this.volume_value = Math.round(this.hass.states[this.config.ampli_entity].attributes.volume_level * 100 * 2) / 2;
                this.output_entity = this.config.ampli_entity;

        } else {

                this.volume_value = Math.round(this.hass.states[this.config.entity].attributes.volume_level * 100);
                this.output_entity = this.config.entity;
        }

        return html`
            <div class="card">
            <div class="page" style="--remote-button-color: ${buttonColor}; --remote-text-color: ${textColor}; --remote-color: ${backgroundColor}; --remotewidth: ${remoteWidth};  --main-border-color: ${borderColor}; --main-border-width: ${borderWidth}">
                  ${this.config.name
                  ? html` <div class="tv_title" style="color:${tv_name_color}" >${this.config.name}</div> `
                  : ""}
                  <div class="grid-container-power"  style="--remotewidth: ${remoteWidth}">
                      <button class="btn-flat flat-high ripple" @click=${() => this._channelList()}><ha-icon icon="mdi:format-list-numbered"/></button>
                      ${stateObj.state === 'off' ? html`
                      <button class="btn ripple" @click=${() => this._media_player_turn_on(mac)}><ha-icon icon="mdi:power" style="color: ${textColor};"/></button>
                      ` : html`
                      <button class="btn ripple" @click=${() => this._media_player_service("turn_off")}><ha-icon icon="mdi:power" style="color: red;"/></button>
                      `}
                      <button class="btn-flat flat-high ripple" @click=${() => this._show_keypad = !this._show_keypad}>123</button>
                  </div> 
                 ${this._show_inputs ? html`
<!-- ################################# SOURCES ################################# -->
                  <div class="grid-container-input">
                  <div class="shape-input">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 130"><path d="m 187 43 a 30 30 0 0 0 60 0 a 30 30 0 0 0 -60 0 M 148 12 a 30 30 0 0 1 30 30 a 40 40 0 0 0 40 40 a 30 30 0 0 1 30 30 v 18 h -236 v -88 a 30 30 0 0 1 30 -30" fill="var(--remote-button-color)" stroke="#000000" stroke-width="0" /></svg>
                   </div>   
                    <button class="ripple bnt-input-back" @click=${() => this._show_inputs = false}><ha-icon icon="mdi:undo-variant"/></button>
                    <p class="source_text"><b>SOURCE</b></p>
                  <div class="grid-item-input">
                    ${stateObj.attributes.source_list.map(source => html`
                    <button class="${stateObj.attributes.source === source ? 'btn-input-on' : 'btn-input  ripple overlay'}" @click=${() => {
                        this._select_source(source);
                        this._show_inputs = false;
                    }}>${source}</button>
                    `)}
                  </div>
<!-- ################################# SOURCES END ################################# -->
                 ` : html`
                 ${this._show_sound_output ? html`
<!-- ################################# SOUND ################################# -->
                  <div class="grid-container-sound">
                    <div class="shape-sound">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260"><path d="m 13 43 a 30 30 0 0 0 60 0 a 30 30 0 0 0 -60 0 M 130 12 h 88 a 30 30 0 0 1 30 30 v 188 a 30 30 0 0 1 -30 30 h -176 a 30 30 0 0 1 -30 -30 v -117 a 30 30 0 0 1 30 -30 a 40 40 0 0 0 41 -41 a 30 30 0 0 1 30 -30 z " fill="var(--remote-button-color)" stroke="#000000" stroke-width="0" /></svg>
                    </div>
                       <button class="bnt-sound-back ripple"  @click=${() => this._show_sound_output = false}><ha-icon icon="mdi:undo-variant"/></button>
                    ${this._show_text ? html`
                        <button class="btn_soundoutput ripple" @click=${() => this._show_text = false}>SOUND</button>
                          <button class="${stateObj.attributes.sound_output === "tv_speaker" ? 'btn_sound_on tv bnt_sound_text_width' : 'btn_sound_off tv bnt_sound_text_width ripple overlay'}"style="margin-left: calc(var(--remotewidth) / 10);" @click=${() => this._select_sound_output("tv_speaker")}>TV Speaker</button>
                          <button class="${stateObj.attributes.sound_output === "tv_external_speaker" ? 'btn_sound_on tv-opt bnt_sound_text_width' : 'btn_sound_off tv-opt bnt_sound_text_width ripple overlay'}" style="margin-right: calc(var(--remotewidth) / 10);" @click=${() => this._select_sound_output("tv_external_speaker")}>TV + Optic</button>
                          <button class="${stateObj.attributes.sound_output === "tv_speaker_headphone" ? 'btn_sound_on tv-phone bnt_sound_text_width' : 'btn_sound_off tv-phone bnt_sound_text_width ripple overlay'}" style="margin-left: calc(var(--remotewidth) / 10);" @click=${() => this._select_sound_output("tv_speaker_headphone")}>TV + H-Phone</button>
                          <button class="${stateObj.attributes.sound_output === "external_optical" ? 'btn_sound_on opt bnt_sound_text_width' : 'btn_sound_off opt bnt_sound_text_width ripple overlay'}" style="margin-right: calc(var(--remotewidth) / 10);" @click=${() => this._select_sound_output("external_optical")}>Optical</button>
                          <button class="${stateObj.attributes.sound_output === "external_arc" ? 'btn_sound_on hdmi bnt_sound_text_width' : 'btn_sound_off hdmi bnt_sound_text_width ripple overlay'}"style="margin-left: calc(var(--remotewidth) / 10);" @click=${() => this._select_sound_output("external_arc")}>HDMI</button>
                          <button class="${stateObj.attributes.sound_output === "lineout" ? 'btn_sound_on line bnt_sound_text_width' : 'btn_sound_off line bnt_sound_text_width ripple overlay'}" style="margin-right: calc(var(--remotewidth) / 10);" @click=${() => this._select_sound_output("lineout")}>Lineout</button>
                          <button class="${stateObj.attributes.sound_output === "headphone" ? 'btn_sound_on phone bnt_sound_text_width' : 'btn_sound_off phone bnt_sound_text_width ripple overlay'}" style="margin-left: calc(var(--remotewidth) / 10);" @click=${() => this._select_sound_output("headphone")}>HeadPhone</button>
                          <button class="${stateObj.attributes.sound_output === "bt_soundbar" ? 'btn_sound_on bluetooth bnt_sound_text_width' : 'btn_sound_off bluetooth bnt_sound_text_width ripple overlay'}" style="margin-right: calc(var(--remotewidth) / 10);" @click=${() => this._select_sound_output("bt_soundbar")}>Bluetooth</button>
                      </div>
                  ` : html`
                      <button class="sound_icon_text  ripple" @click=${() => this._show_text = true}><ha-icon style="height: calc(var(--remotewidth) / 6); width: calc(var(--remotewidth) / 6);" icon="mdi:speaker"></button>
                        <button class="${stateObj.attributes.sound_output === "tv_speaker" ? 'btn_sound_on tv bnt_sound_icon_width' : 'btn_sound_off tv bnt_sound_icon_width ripple overlay'}" style="margin-left: calc(var(--remotewidth) / 7.5);" @click=${() => this._select_sound_output("tv_speaker")}><ha-icon class="icon_source" icon="mdi:television-classic"></button>
                        <button class="${stateObj.attributes.sound_output === "tv_external_speaker" ? 'btn_sound_on tv-opt bnt_sound_icon_width' : 'btn_sound_off tv-opt bnt_sound_icon_width ripple overlay'}" style="margin-right: calc(var(--remotewidth) / 7.5);" @click=${() => this._select_sound_output("tv_external_speaker")}>${LgRemoteControl.tvoptic}</button>
                        <button class="${stateObj.attributes.sound_output === "tv_speaker_headphone" ? 'btn_sound_on tv-phone bnt_sound_icon_width' : 'btn_sound_off tv-phone bnt_sound_icon_width ripple overlay'}" style="margin-left: calc(var(--remotewidth) / 7.5);" @click=${() => this._select_sound_output("tv_speaker_headphone")}>${LgRemoteControl.tvheadphone}</button>
                        <button class="${stateObj.attributes.sound_output === "external_optical" ? 'btn_sound_on opt bnt_sound_icon_width' : 'btn_sound_off opt bnt_sound_icon_width ripple overlay'}" style="margin-right: calc(var(--remotewidth) / 7.5);" @click=${() => this._select_sound_output("external_optical")}>${LgRemoteControl.optic}</button>
                        <button class="${stateObj.attributes.sound_output === "external_arc" ? 'btn_sound_on hdmi bnt_sound_icon_width' : 'btn_sound_off hdmi bnt_sound_icon_width ripple overlay'}"style="margin-left: calc(var(--remotewidth) / 7.5);" @click=${() => this._select_sound_output("external_arc")}>${LgRemoteControl.arc}</button>
                        <button class="${stateObj.attributes.sound_output === "lineout" ? 'btn_sound_on line bnt_sound_icon_width' : 'btn_sound_off line bnt_sound_icon_width ripple overlay'}" style="margin-right: calc(var(--remotewidth) / 7.5);" @click=${() => this._select_sound_output("lineout")}>${LgRemoteControl.lineout}</button>
                        <button class="${stateObj.attributes.sound_output === "headphone" ? 'btn_sound_on phone bnt_sound_icon_width' : 'btn_sound_off phone bnt_sound_icon_width ripple overlay'}" style="margin-left: calc(var(--remotewidth) / 7.5);" @click=${() => this._select_sound_output("headphone")}><ha-icon class="icon_source" icon="mdi:headphones"></button>
                        <button class="${stateObj.attributes.sound_output === "bt_soundbar" ? 'btn_sound_on bluetooth bnt_sound_icon_width' : 'btn_sound_off bluetooth bnt_sound_icon_width ripple overlay'}" style="margin-right: calc(var(--remotewidth) / 7.5);" @click=${() => this._select_sound_output("bt_soundbar")}><ha-icon class="icon_source" icon="mdi:bluetooth"></button>
                    </div>
                    `}
<!-- ################################# SOUND END ################################# -->
                    ` : html`

                    ${this._show_keypad ? html`
<!-- ################################ keypad ################################## -->
                    <div class="grid-container-keypad">
                        <button class="btn-keypad ripple" @click=${() => this._button("1")}>1</button>
                        <button class="btn-keypad ripple" @click=${() => this._button("2")}>2</button>
                        <button class="btn-keypad ripple" @click=${() => this._button("3")}>3</button>
                        <button class="btn-keypad ripple" @click=${() => this._button("4")}>4</button>
                        <button class="btn-keypad ripple" @click=${() => this._button("5")}>5</button>
                        <button class="btn-keypad ripple" @click=${() => this._button("6")}>6</button>
                        <button class="btn-keypad ripple" @click=${() => this._button("7")}>7</button>
                        <button class="btn-keypad ripple" @click=${() => this._button("8")}>8</button>
                        <button class="btn-keypad ripple" @click=${() => this._button("9")}>9</button>
                        <button class="btn-keypad ripple" @click=${() => this._button("DASH")}>—</button>
                        <button class="btn-keypad ripple" @click=${() => this._button("0")}>0</button>
                        <button class="btn-keypad"></button>
                  </div>
  <!-- ################################# keypad end ############################## --> 
                 ` : html`
<!-- ################################# DIRECTION PAD ################################# -->
                  <div class="grid-container-cursor">
                  <div class="shape">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 79"><path d="m 30 15 a 10 10 0 0 1 20 0 a 15 15 0 0 0 15 15 a 10 10 0 0 1 0 20 a 15 15 0 0 0 -15 15 a 10 10 0 0 1 -20 0 a 15 15 0 0 0 -15 -15 a 10 10 0 0 1 0 -20 a 15 15 0 0 0 15 -15" fill="var(--remote-button-color)" stroke="#000000" stroke-width="0" /></svg>
                    </div> 
                      <button class="btn ripple item_sound" @click=${() => this._show_sound_output = true}><ha-icon icon="mdi:speaker"/></button>
                      <button class="btn ripple item_up" style="background-color: transparent;" @click=${() => this._button("UP")}><ha-icon icon="mdi:chevron-up"/></button>
                      <button class="btn ripple item_input" @click=${() => this._show_inputs = true}><ha-icon icon="mdi:import"/></button>
                      <button class="btn ripple item_2_sx" style="background-color: transparent;" @click=${() => this._button("LEFT")}><ha-icon icon="mdi:chevron-left"/></button>
                      <div class="ok_button ripple item_2_c" style="border: solid 2px ${backgroundColor}"  @click=${() => this._button("ENTER")}>${this._show_vol_text === true ? this.volume_value : 'OK'}</div>
                      <button class="btn ripple item_right" style="background-color: transparent;" @click=${() => this._button("RIGHT")}><ha-icon icon="mdi:chevron-right"/></button>
                      <button class="btn ripple item_back" @click=${() => this._button("BACK")}><ha-icon icon="mdi:undo-variant"/></button>
                      <button class="btn ripple item_down" style="background-color: transparent;" @click=${() => this._button("DOWN")}><ha-icon icon="mdi:chevron-down"/></button>
                      <button class="btn ripple item_exit" @click=${() => this._button("EXIT")}>EXIT</button>
                    </div>
<!-- ################################# DIRECTION PAD END ################################# -->
                  `}
                
                  `}
<!-- ################################# SOURCE BUTTONS ################################# -->
                  ${this.config.sources ? html`
                      <div class="grid-container-source">
                      ${this.config.sources.map(source => {
                      return html`
                        <button class="btn_source ripple" @click=${() => this._select_source(source.name)}>
                          ${LgRemoteControl.getIcon(source.icon)}
                        </button>
                      `;
                      })}
                      </div>
                    ` : html`
                  <div class="grid-container-source">
                      <button class="btn_source ripple" @click=${() => this._select_source("Netflix")}><ha-icon style="heigth: 70%; width: 70%;" icon="mdi:netflix"/></button>
                      <button class="btn_source ripple" @click=${() => this._select_source("Prime Video")}>${LgRemoteControl.amazon}</button>
                      <button class="btn_source ripple" @click=${() => this._select_source("Disney+")}>${LgRemoteControl.disneyIcon}</button>
                      <button class="btn_source ripple" @click=${() => this._select_source("DAZN")}>${LgRemoteControl.daznIcon}</button>
                  </div>`}
<!-- ################################# SOURCE BUTTONS END ################################# -->

<!-- ################################# COLORED BUTTONS ################################# -->
                ${colorButtons ? html`
                  <div class="grid-container-color_btn">
                      <button class="btn-color ripple" style="background-color: red; height: calc(var(--remotewidth) / 12);" @click=${e => this._button("RED")}></button>
                      <button class="btn-color ripple" style="background-color: green; height: calc(var(--remotewidth) / 12);" @click=${e => this._button("GREEN")}></button>
                      <button class="btn-color ripple" style="background-color: yellow; height: calc(var(--remotewidth) / 12);" @click=${e => this._button("YELLOW")}></button>
                      <button class="btn-color ripple" style="background-color: blue; height: calc(var(--remotewidth) / 12);" @click=${e => this._button("BLUE")}></button>
                  </div>
                  ` : html`
                  `}
<!-- ################################# COLORED BUTTONS END ################################# -->

                  <div class="grid-container-volume-channel-control" >
                      <button class="btn ripple" id="plusButton"  style="border-radius: 50% 50% 0px 0px; margin: 0px auto 0px auto; height: 100%;" }><ha-icon icon="mdi:plus"/></button>
                      <button class="btn-flat flat-high ripple" style="margin-top: 0px; height: 50%;" @click=${() => this._button("HOME")}><ha-icon icon="mdi:home"></button>
                      <button class="btn ripple" style="border-radius: 50% 50% 0px 0px; margin: 0px auto 0px auto; height: 100%;" @click=${() => this._button("CHANNELUP")}><ha-icon icon="mdi:chevron-up"/></button>
                      <button class="btn" style="border-radius: 0px; cursor: default; margin: 0px auto 0px auto; height: 100%;"><ha-icon icon="${stateObj.attributes.is_volume_muted === true ? 'mdi:volume-off' : 'mdi:volume-high'}"/></button>
                      <button class="btn ripple" Style="color:${stateObj.attributes.is_volume_muted === true ? 'red' : ''}; height: 100%;"" @click=${() => this._button("MUTE")}><span class="${stateObj.attributes.is_volume_muted === true ? 'blink' : ''}"><ha-icon icon="mdi:volume-mute"></span></button>
                      <button class="btn" style="border-radius: 0px; cursor: default; margin: 0px auto 0px auto; height: 100%;"><ha-icon icon="mdi:parking"/></button>
                      <button class="btn ripple" id="minusButton" style="border-radius: 0px 0px 50% 50%;  margin: 0px auto 0px auto; height: 100%;" ><ha-icon icon="mdi:minus"/></button>
                      <button class="btn-flat flat-high ripple" style="margin-bottom: 0px; height: 50%;" @click=${() => this._button("INFO")}><ha-icon icon="mdi:information-variant"/></button>
                      <button class="btn ripple" style="border-radius: 0px 0px 50% 50%;  margin: 0px auto 0px auto; height: 100%;"  @click=${() => this._button("CHANNELDOWN")}><ha-icon icon="mdi:chevron-down"/></button>
                  </div>

<!-- ################################# MEDIA CONTROL ################################# -->
                 <div class="grid-container-media-control" >
                      <button class="btn-flat flat-low ripple"  @click=${() => this._command("media.controls/play")}><ha-icon icon="mdi:play"/></button>
                      <button class="btn-flat flat-low ripple"  @click=${() => this._command("media.controls/pause")}><ha-icon icon="mdi:pause"/></button>
                      <button class="btn-flat flat-low ripple"  @click=${() => this._command("media.controls/stop")}><ha-icon icon="mdi:stop"/></button>
                      <button class="btn-flat flat-low ripple"  @click=${() => this._command("media.controls/rewind")}><ha-icon icon="mdi:skip-backward"/></button>
                      <button class="btn-flat flat-low ripple" style="color: red;" @click=${() => this._command("media.controls/Record")}><ha-icon icon="mdi:record"/></button>
                      <button class="btn-flat flat-low ripple"  @click=${() => this._command("media.controls/fastForward")}><ha-icon icon="mdi:skip-forward"/></button>
                  </div> 
<!-- ################################# MEDIA CONTROL END ################################# -->
                  </div>
                `}
                </div>
              </div>
            `;
    }

    _channelList() {
        const popupEvent = new Event('ll-custom', { bubbles: true, cancelable: false, composed: true });
        popupEvent.detail = {
            "browser_mod": {
                "service": "browser_mod.popup",
                "data": {
                    "content": {
                        "type": "custom:card-channel-pad",
                        "entity": this.config.entity,
                        "channels": this.config.channels
                    },
                    "title": " ",
                    "size": "wide",
                    "style": "--popup-border-radius: 15px;"
                }
            }
        };
        this.ownerDocument.querySelector("home-assistant").dispatchEvent(popupEvent);
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
    _media_player_turn_on(mac) {
        if (this.config.mac) {
            this.hass.callService("wake_on_lan", "send_magic_packet", {
                mac: mac
            });
        } else {
            this._media_player_service("turn_on");
        }
    }
    
    _media_player_service(service) {
        this.hass.callService("media_player", service, {
            entity_id: this.config.entity,
        });
    }
    
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        const plusButton = this.shadowRoot.querySelector("#plusButton");
        const minusButton = this.shadowRoot.querySelector("#minusButton");
        const interval = this.output_entity === this.config.ampli_entity ? 250 : 100;
        let longPressTimer;
        let isLongPress = false;
    
        // Funzione per aggiornare e chiamare il servizio
        const updateValue = (service) => {
            this.hass.callService("media_player", service, {
                entity_id: this.output_entity,
            });
        };
    
        // Gestore per il pulsante '+' (plusButton)
        plusButton.addEventListener("mousedown", () => {
            if (!isNaN(this.volume_value)) {
                isLongPress = false;
                this._show_vol_text = true;
                longPressTimer = setTimeout(() => {
                    isLongPress = true;
                    updateValue("volume_up");
                    longPressTimer = setInterval(() => updateValue("volume_up"), interval);
                }, 500);
            }
        });
    
        plusButton.addEventListener("touchstart", (e) => {
            e.preventDefault();
            if (!isNaN(this.volume_value)) {
                isLongPress = false;
                this._show_vol_text = true;
                longPressTimer = setTimeout(() => {
                    isLongPress = true;
                    updateValue("volume_up");
                    longPressTimer = setInterval(() => updateValue("volume_up"), interval);
                }, 500);
            }
        });
    
        plusButton.addEventListener("mouseup", () => {
            clearTimeout(longPressTimer);
            if (!isLongPress) {
                updateValue("volume_up");
            }
            clearInterval(longPressTimer);
            this.valueDisplayTimeout = setTimeout(() => {
                this._show_vol_text = false;
            }, 500);
        });
    
        plusButton.addEventListener("touchend", () => {
            clearTimeout(longPressTimer);
            if (!isLongPress) {
                updateValue("volume_up");
            }
            clearInterval(longPressTimer);
            this.valueDisplayTimeout = setTimeout(() => {
                this._show_vol_text = false;
            }, 500);
        });
    
        // Gestore per il pulsante '-' (minusButton)
        minusButton.addEventListener("mousedown", () => {
            if (!isNaN(this.volume_value)) {
                isLongPress = false;
                this._show_vol_text = true;
                longPressTimer = setTimeout(() => {
                    isLongPress = true;
                    updateValue("volume_down");
                    longPressTimer = setInterval(() => updateValue("volume_down"), interval);
                }, 400);
            }
        });
    
        minusButton.addEventListener("touchstart", (e) => {
            e.preventDefault();
            if (!isNaN(this.volume_value)) {
                isLongPress = false;
                this._show_vol_text = true;
                longPressTimer = setTimeout(() => {
                    isLongPress = true;
                    updateValue("volume_down");
                    longPressTimer = setInterval(() => updateValue("volume_down"), interval);
                }, 400);
            }
        });
    
        minusButton.addEventListener("mouseup", () => {
            clearTimeout(longPressTimer);
            if (!isLongPress) {
                updateValue("volume_down");
            }
            clearInterval(longPressTimer);
            this.valueDisplayTimeout = setTimeout(() => {
                this._show_vol_text = false;
            }, 500);
        });
    
        minusButton.addEventListener("touchend", () => {
            clearTimeout(longPressTimer);
            if (!isLongPress) {
                updateValue("volume_down");
            }
            clearInterval(longPressTimer);
            this.valueDisplayTimeout = setTimeout(() => {
                this._show_vol_text = false;
            }, 500);
        });
    }
    
    updated(changedProperties) {
    
        if (changedProperties.has("hass")) {
            const tvEntity = this.hass.states[this.config.entity];
            const newSoundOutput = tvEntity.attributes.sound_output;
    
            if (newSoundOutput !== this.soundOutput) {
                this.soundOutput = newSoundOutput; // Aggiorna il valore della variabile di classe
                this.requestUpdate(); // Richiedi l'aggiornamento della card
            }
        }
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
    
    setConfig(config) {
        if (!config.entity) {
            throw new Error("Invalid configuration");
        }
        this.config = config;
    }
    
    getCardSize() {
        return 15;
    }

    static getIcon(iconName) {
        return Object.keys(LgRemoteControl.iconMapping).includes(iconName)
            ? LgRemoteControl.iconMapping[iconName]
            : html`<ha-icon style="height: 70%; width: 70%;" icon="${iconName}"/>`;
    }

    static get styles() {
        return css`
        @keyframes blinker {
            50% {
            opacity: 0;
        }
        }
        .tv_title {
            width: fit-content;
            alig: -webkit-center;
            display: block;
            margin: auto;
            padding: calc(var(--remotewidth)/52) calc(var(--remotewidth)/26);
            border-radius: calc(var(--remotewidth)/10);
            background-color: var(--remote-button-color);
        }
        button:focus {
            outline: 0;
        }
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
        .card, .ripple:after {
            width: 100%;
            height: 100%}
        .card {
            display: flex;
            justify-content: center;
        }
        .page {
            background-color: var(--remote-color);
            height: 100%;
            display: inline-block;
            flex-direction: row;
            border: var(--main-border-width) solid var(--main-border-color);
            border-radius: calc(var(--remotewidth)/7.5);
            padding: calc(var(--remotewidth)/37.5) calc(var(--remotewidth)/15.2) calc(var(--remotewidth)/11);
        }
        .grid-container-power {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr;
            background-color: transparent;
            overflow: hidden;
            width: var(--remotewidth);
            height: calc(var(--remotewidth)/3);
        }
        .grid-container-cursor, .grid-container-keypad {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            overflow: hidden;
            height: var(--remotewidth);
        }
        .grid-container-cursor {
            grid-template-rows: 1fr 1fr 1fr;
            width: var(--remotewidth);
            grid-template-areas: "sound up input""left ok right""back down exit"}
        .grid-container-keypad {
            grid-template-rows: 1fr 1fr 1fr 1fr;
            background-color: transparent;
            background-color: var(--remote-button-color);
            border-radius: 35px;
            width: calc(var(--remotewidth) - 10%);
            margin: auto;
        }
        .grid-container-input, .grid-container-sound {
            display: grid;
            background-color: transparent;
            overflow: hidden;
            width: var(--remotewidth);
        }
        .grid-container-input {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: calc(var(--remotewidth)/2) calc(var(--remotewidth)/.5115);
        }
        .grid-container-sound {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 28% 6% 16% 16% 16% 16% 6%;
            height: var(--remotewidth);
            grid-template-areas: "bnt title"". .""tv tv-opt""tv-phone opt""hdmi line""phone bluetooth"}
        .grid-container-color_btn, .grid-container-source {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: auto;
            background-color: transparent;
            width: calc(var(--remotewidth)/1.03);
            overflow: hidden;
            margin: auto;
        }
        .grid-container-color_btn {
            height: calc(var(--remotewidth)/10);
        }
        .grid-container-media-control, .grid-container-volume-channel-control {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            background-color: transparent;
            width: var(--remotewidth);
            height: calc(var(--remotewidth)/1.4);
            overflow: hidden;
            margin-top: calc(var(--remotewidth)/12);
        }
        .grid-container-media-control {
            grid-template-rows: 1fr 1fr;
            height: calc(var(--remotewidth)/2.85);
        }
        .grid-item-input {
            grid-column-start: 1;
            grid-column-end: 4;
            grid-row-start: 1;
            grid-row-end: 3;
            display: grid;
            grid-template-columns: auto;
            background-color: var(--remote-button-color);
            margin: auto;
            margin-top: calc(var(--remotewidth)/2.6);
            overflow: scroll;
            height: calc(var(--remotewidth)*2.01);
            width: calc(var(--remotewidth) - 9%);
            border-radius: calc(var(--remotewidth)/12);
        }
        .grid-item-input::-webkit-scrollbar {
            display: none;
            -ms-overflow-style: none;
        }
        .shape, .shape-input, .shape-sound, .source_text {
            grid-column-start: 1;
            grid-column-end: 4;
            grid-row-start: 1;
        }
        .shape {
            grid-row-end: 4;
            padding: 5px;
        }
        .shape-input, .shape-sound, .source_text {
            grid-row-end: 3;
        }
        .shape-sound, .source_text {
            grid-column-end: 5;
            grid-row-end: 6;
        }
        .source_text {
            grid-column-end: 3;
            grid-row-end: 2;
            text-align: center;
            margin-top: calc(var(--remotewidth)/6);
            font-size: calc(var(--remotewidth)/10);
            opacity: .3;
        }
        .btn_soundoutput, .sound_icon_text {
            width: 70%;
            height: 70%;
            border-width: 0;
            margin: auto auto 0 0;
            cursor: pointer;
            background-color: transparent;
            grid-area: title;
        }
        .sound_icon_text {
            color: var(--remote-text-color);
            font-size: calc(var(--remotewidth)/18.75);
            overflow: hidden;
        }
        .btn_soundoutput {
            font-size: calc(var(--remotewidth)/12.5);
            display: block;
            opacity: .4;
            color: var(--remote-text-color) font-weight: bold;
        }
        .tv {
            grid-area: tv;
        }
        .tv-opt {
            grid-area: tv-opt;
        }
        .tv-phone {
            grid-area: tv-phone;
        }
        .opt {
            grid-area: opt;
        }
        .hdmi {
            grid-area: hdmi;
        }
        .phone {
            grid-area: phone;
        }
        .line {
            grid-area: line;
        }
        .bluetooth {
            grid-area: bluetooth;
        }
        .item_sound {
            grid-area: sound;
        }
        .item_up {
            grid-area: up;
        }
        .item_input {
            grid-area: input;
        }
        .item_2_sx {
            grid-area: left;
        }
        .item_2_c {
            grid-area: ok;
        }
        .item_right {
            grid-area: right;
        }
        .item_back {
            grid-area: back;
        }
        .item_down {
            grid-area: down;
        }
        .item_exit {
            grid-area: exit;
        }
        ha-icon {
            width: calc(var(--remotewidth)/10.8);
            height: calc(var(--remotewidth)/10.8);
        }
        .bnt-input-back, .bnt-sound-back, .btn {
            font-size: calc(var(--remotewidth)/18.75);
            border-radius: 50%;
            place-items: center;
            display: inline-block;
            cursor: pointer;
        }
        .btn {
            background-color: var(--remote-button-color);
            color: var(--remote-text-color);
            width: 70%;
            height: 70%;
            border-width: 0;
            margin: auto;
        }
        .bnt-input-back, .bnt-sound-back {
            background-color: transparent;
            margin-top: calc(var(--remotewidth)/21);
        }
        .bnt-input-back {
            grid-column-start: 3;
            grid-column-end: 4;
            grid-row-start: 1;
            grid-row-end: 2;
            color: var(--remote-text-color);
            width: 70%;
            height: 50%;
            border-width: 0;
            margin-left: calc(var(--remotewidth)/21);
        }
        .bnt-sound-back {
            margin-left: 0;
            grid-area: bnt;
            width: 45%;
            height: 83%;
            margin-left: calc(var(--remotewidth)/18);
        }
        .bnt-sound-back, .btn-color, .btn-keypad, .btn_source {
            color: var(--remote-text-color);
            border-width: 0;
        }
        .btn-keypad {
            background-color: transparent;
            font-size: calc(var(--remotewidth)/10);
            width: 100%;
            height: 100%}
        .btn-color, .btn_source {
            background-color: var(--remote-button-color);
            border-radius: calc(var(--remotewidth)/10);
            place-items: center;
            cursor: pointer;
        }
        .btn_source {
            width: calc(var(--remotewidth)/5.9);
            height: calc(var(--remotewidth)/8.125);
            margin: calc(var(--remotewidth)/18.57) auto calc(var(--remotewidth)/20);
        }
        .btn-color {
            width: 70%;
            height: 55%;
            margin: auto;
        }
        .icon_source {
            height: 100%;
            width: 100%}
        .btn-input, .btn-input-on {
            font-size: calc(var(--remotewidth)/18.5);
            height: calc(var(--remotewidth)/7.2226);
            border-width: 0;
            border-radius: calc(var(--remotewidth)/20);
            margin: calc(var(--remotewidth)/47);
            place-items: center;
            display: list-item;
            cursor: pointer;
        }
        .btn-input {
            background-color: var(--remote-button-color);
            color: var(--remote-text-color);
            border: solid 2px var(--remote-color);
        }
        .btn-input-on {
            background-color: var(--primary-color);
            color: #fff;
        }
        .bnt_sound_icon_width {
            width: calc(var(--remotewidth)/3);
        }
        .bnt_sound_text_width {
            width: calc(var(--remotewidth)/2.6);
        }
        .btn_sound_off, .btn_sound_on {
            font-size: calc(var(--remotewidth)/25);
            height: calc(var(--remotewidth)/9.3);
            border-width: 0;
            border-radius: calc(var(--remotewidth)/20);
            margin: auto;
            display: block;
            cursor: pointer;
        }
        .btn_sound_on {
            background-color: var(--primary-color);
            color: #fff;
        }
        .btn_sound_off {
            background-color: var(--remote-button-color);
            color: var(--remote-text-color);
            border: solid 2px var(--remote-color);
        }
        .overlay {
            background-color: rgba(0, 0, 0, .02);
        }
        .flat-high {
            width: 70%;
            height: 37%}
        .flat-low {
            width: 70%;
            height: 65%}
        .btn-flat {
            background-color: var(--remote-button-color);
            color: var(--remote-text-color);
            font-size: calc(var(--remotewidth)/18.75);
            border-width: 0;
            border-radius: calc(var(--remotewidth)/10);
            margin: auto;
            display: grid;
            place-items: center;
            display: inline-block;
            cursor: pointer;
        }
      

        .ok_button {
            display: flex;
            justify-content: center;
            align-items: center;
            border: solid 3px var(--ha-card-background);
            border-radius: 100%;
            font-size: calc(var(--remotewidth)/16.6);
            cursor: pointer;

        }

        .vol_text_value {
            // width: 40px;
            background-color: transparent;
            border: none;
            text-align: center;
            color: var(--primary-text-color);
            font-size: calc(var(--remotewidth)/14);

  `;
    }

}

customElements.define('lg-remote-control', LgRemoteControl);