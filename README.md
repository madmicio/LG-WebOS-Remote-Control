# LG-WebOS-Remote-Control
Remote Control for LG TV WebOS

![all](example/remote-control.jpg)

![all](example/channels.jpg)

browser_mod is required for this channel panel
custom card: "card-channel-pad" is required.(you can find it on my github)


![all](example/pad.png)

browser_mod is required for this keypad
custom card: "card-numeric-pad" is required.(you can find it on my github)

**NOTE: need in "your-theme.yaml**
```yaml
#button
  active-background-button-color: "#f2f0fa"
```


#f2f0fa" referred to the clear remote control
"#333336" referred to the dark remote control
obviously you can customize the color to harmonize the remote control with your theme

lovelace config:
```yaml
- type: 'custom:lg-remote-control'
  entities:
    - entity: media_player.tv_lg_55c8
```

## hacs Card install
1. add custom reposity: madmicio/LG-WebOS-Remote-Control as plugin.

2. install `LG WebOS Remote Control` plugin

3. Add a reference  inside your resources config:

  ```yaml
resources:
  - type: module
    url: /hacsfiles/LG-WebOS-Remote-Control/lg-remote-control.js
```


### Manual install

1. Download and copy `lg-remote-control.js` from (https://github.com/madmicio/LG-WebOS-Remote-Control) into your custom components  directory.

2. Add a reference `lg-remote-control.js` inside your resources config:

  ```yaml
  resources:
    - url: /local/"your_directory"/lg-remote-control.js
      type: module
  ```
  
  ## Install Tv Logo
  
  1. download tv_logo direcoty into www/lg_remote/tv_logo
  
  ## chanel pad setup
  
  in this version the only way to edit thi pannel is edit "lg-remote-control.js"
  
  you can easily find a list of channels structured like this:
```yaml
  {
    "entity": "media_player.tv_lg_55c8",
    "image": "url('/local/lg_remote/tv_logo/Rai 1 HD.png')",
    "number": "501"
  },
  {
    "entity": "media_player.tv_lg_55c8",
    "image": "url('/local/lg_remote/tv_logo/Rai 2 HD.png')",
    "number": "502"
  },
```

**popup button**
![all](example/popup.png)

**NOTE**
- **SMART** button not enable
- **INPUT** button not enable
