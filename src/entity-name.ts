import { HassEntity } from "home-assistant-js-websocket";
import { HomeAssistant } from "custom-card-helpers";
import { EntityName, HomeAssistantWithEntityNames } from "./types";

// hass.formatEntityName only takes a card's name option (a user string, a
// structured name, or undefined) from HA 2026.4. Earlier versions expose the
// same helper with an incompatible signature, so the version check is needed -
// and a hass can report a recent version without carrying the helper at all
// (during startup, or in a test harness), so both checks are.
export function supportsEntityNames(hass?: HomeAssistant): hass is HomeAssistantWithEntityNames {
  if (typeof (hass as HomeAssistantWithEntityNames | undefined)?.formatEntityName !== "function") {
    return false;
  }
  const [major, minor] = (hass?.config?.version ?? "").split(".", 2);
  return Number(major) > 2026 || (Number(major) === 2026 && Number(minor) >= 4);
}

// Resolves a name against the entity's registry context (entity, device, area,
// floor). Falls back to the friendly name on versions that cannot resolve a
// structured name.
export function computeEntityName(hass: HomeAssistant | undefined, entityId: string, name?: EntityName): string {
  // A configured empty name has always meant "use Home Assistant's name", but
  // formatEntityName returns any string verbatim - including the empty one, which
  // would blank the label. Normalise it to undefined so the formatter composes.
  if (name === "") name = undefined;

  if (typeof name === "string" && name) {
    return name;
  }
  const stateObj: HassEntity | undefined = hass?.states[entityId];
  if (!stateObj) {
    return "";
  }
  if (supportsEntityNames(hass)) {
    return hass.formatEntityName(stateObj, name) ?? "";
  }
  return stateObj.attributes.friendly_name ?? "";
}
