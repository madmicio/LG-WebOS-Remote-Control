export function getMediaPlayerEntitiesByPlatform(hass, platformName) {
  let entities = Object.keys(hass.entities).filter(
    (eid) => hass.entities[eid].platform === platformName
  );
  const re = /media_player/;
  return entities.filter(a => re.exec(a));
}
