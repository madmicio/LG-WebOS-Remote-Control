import { HomeAssistant } from "custom-card-helpers";

export interface HomeAssistantFixed extends HomeAssistant {
  entities: { [id: string]: EntityRegistryDisplayEntry };
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