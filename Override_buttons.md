## Overriding key actions

Example config:
```yaml
type: custom:lg-remote-control
av_receiver_family: anthemav
entity: media_player.lg_webos_smart_tv
is_smart_tv: 'true'
colors:
  buttons: red
  text: blue
  background: blue
projectorentity: ''
mac: '00:11:22:33:44:66'
keys:
  LEFT:
    service: light.toggle
    data:
      entity_id: light.tv
  VOLUME_UP:
    service: light.toggle
    data:
      entity_id: light.tv
```

available keys:
- `"1"`
- `"2"`
- `"3"`
- `"4"`
- `"5"`
- `"6"`
- `"7"`
- `"8"`
- `"9"`
- `"0"`
- `"UP"`
- `"LEFT"`
- `"ENTER"`
- `"RIGHT"`
- `"BACK"`
- `"DOWN"`
- `"EXIT"`
- `"RED"`
- `"GREEN"`
- `"YELLOW"`
- `"BLUE"`
- `"HOME"`
- `"CHANNELUP"`
- `"MUTE"`
- `"INFO"`
- `"CHANNELDOWN"`
- `"PLAY"`
- `"PAUSE"`
- `"STOP"`
- `"REWIND"`
- `"RECORD"`
- `"FAST_FOWARD"`
- `"POWER"`
- `"VOLUME_UP"`
- `"VOLUME_DOWN"`
