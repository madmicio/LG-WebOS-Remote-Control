## Overriding key actions

You can override the default behavior of any button to call a different Home Assistant service. You can also customize the icon and style for media control buttons (PLAY, PAUSE, STOP, REWIND, RECORD, FAST_FOWARD).

Example config:

```yaml
type: custom:lg-remote-control
av_receiver_family: anthemav
entity: media_player.lg_webos_smart_tv
is_smart_tv: "true"
colors:
  buttons: red
  text: blue
  background: blue
projectorentity: ""
mac: "00:11:22:33:44:66"
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

### Customizing media control buttons (icons and style)

For media control buttons (PLAY, PAUSE, STOP, REWIND, RECORD, FAST_FOWARD), you can also customize the icon and button style. This is useful for repurposing these buttons for other functions like receiver volume control:

```yaml
type: custom:lg-remote-control
entity: media_player.lg_webos_smart_tv
keys:
  PLAY:
    icon: mdi:volume-high
    service: media_player.volume_up
    data:
      entity_id: media_player.receiver
  PAUSE:
    icon: mdi:volume-medium
    service: media_player.volume_mute
    data:
      entity_id: media_player.receiver
  STOP:
    icon: mdi:volume-low
    service: media_player.volume_down
    data:
      entity_id: media_player.receiver
  REWIND:
    icon: mdi:skip-previous
    service: media_player.media_previous_track
    data:
      entity_id: media_player.receiver
  RECORD:
    icon: mdi:power
    style: color: green;
    service: media_player.toggle
    data:
      entity_id: media_player.receiver
  FAST_FOWARD:
    icon: mdi:skip-next
    service: media_player.media_next_track
    data:
      entity_id: media_player.receiver
```

### Key configuration options

| Property  | Description                                                        |
| --------- | ------------------------------------------------------------------ |
| `service` | Home Assistant service to call (e.g., `media_player.volume_up`)    |
| `data`    | Service data to pass (e.g., `entity_id: media_player.receiver`)    |
| `icon`    | Custom icon for media control buttons (e.g., `mdi:volume-high`)    |
| `style`   | Custom CSS style for media control buttons (e.g., `color: green;`) |

### Available keys:

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
