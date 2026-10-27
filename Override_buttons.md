## Overriding key actions and appearance

Use the visual editor's **Overrides** section, or configure `keys` in YAML. Every key listed below supports an optional icon, CSS style and Home Assistant service.

| Property | Description |
| --- | --- |
| `service` | Optional Home Assistant service, for example `media_player.volume_up`. Without a service, the original action and its data are kept. |
| `data` | Data for a custom service. These replace the original action's data; the card does not add TV-specific parameters. Configure additional fields in YAML. A service that needs no data can omit this field. |
| `icon` | Optional Material Design icon, for example `mdi:lightbulb`. |
| `style` | Optional inline CSS, for example `"color: green;"`. Styles are appended to the button's existing inline styles. |

### Change only the appearance

This keeps PLAY's normal action:

```yaml
type: custom:lg-remote-control
entity: media_player.lg_webos_smart_tv
keys:
  PLAY:
    icon: mdi:play-circle
    style: "color: green;"
```

An empty override also keeps the original behavior. Removing an override restores the original icon, style and action.

### Change the action of the volume buttons

`VOLUME_UP` and `VOLUME_DOWN` refer to the actual **+** and **−** buttons. Their icons and styles can be changed independently from their actions. Short presses and held presses use the configured service.

```yaml
type: custom:lg-remote-control
entity: media_player.lg_webos_smart_tv
keys:
  VOLUME_UP:
    service: media_player.volume_up
    data:
      entity_id: media_player.soundbar
    icon: mdi:volume-plus
    style: "color: green;"
  VOLUME_DOWN:
    service: media_player.volume_down
    data:
      entity_id: media_player.soundbar
    icon: mdi:volume-minus
```

### Repurpose another button

```yaml
keys:
  LEFT:
    service: light.toggle
    data:
      entity_id: light.tv
  RECORD:
    service: script.movie_mode
    icon: mdi:movie-open
    style: "color: orange;"
  PAUSE:
    service: media_player.volume_mute
    data:
      entity_id: media_player.receiver
      is_volume_muted: true
```

Icons and styles also apply to all six media buttons: PLAY, PAUSE, STOP, REWIND, RECORD and FAST_FOWARD. The spelling `FAST_FOWARD` is retained for compatibility.

The existing power behavior is preserved: when `mac` is set, turning on the TV sends Wake-on-LAN directly. A `POWER` service override is used for power-on only when `mac` is absent.

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
