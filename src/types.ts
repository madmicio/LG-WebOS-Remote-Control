import { HomeAssistant } from "custom-card-helpers";
import { HassEntity } from "home-assistant-js-websocket";

export interface HomeAssistantFixed extends HomeAssistant {
  entities: { [id: string]: EntityRegistryDisplayEntry };
}

// One part of a structured name, mirroring EntityNameItem in the Home Assistant
// frontend. A name is resolved against the entity's registry context, so it can
// be composed from the device, area or floor name.
export type EntityNameItem =
  | { type: "entity" | "device" | "area" | "floor" }
  | { type: "text"; text: string };

export type EntityName = string | EntityNameItem | EntityNameItem[];

export interface HomeAssistantWithEntityNames extends HomeAssistant {
  formatEntityName: (stateObj: HassEntity, name?: EntityName) => string | undefined;
}

type entityCategory = "config" | "diagnostic";

export interface EntityRegistryDisplayEntry {
  entity_id: string;
  name?: string;
  device_id?: string;
  area_id?: string;
  hidden?: boolean;
  entity_category?: entityCategory;
  translation_key?: string;
  platform?: string;
  display_precision?: number;
}

export interface WindowWithCards extends Window {
  customCards: unknown[];
}