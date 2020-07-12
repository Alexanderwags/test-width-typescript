import {
  Change,
  convertAttributeToField,
  SystemCategories,
  UpdateType,
} from "../../SystemCategories";

export const createEmptyTrigger = (): Trigger => ({
  id: 0,
  name: "",
  description: "",
  type: 0,
  action: 0,
  value: 0,
  options: "",
  enabled: true,
  triggerAttribute: [],
});

export interface Trigger {
  id: number;
  name: string;
  description: string;
  type: number;
  action: number;
  value: number;
  options: string;
  enabled: boolean;
  triggerAttribute: any[];
}

export enum TriggerElements {
  id = 0,
  name = 1,
  description = 2,
  type = 3,
  action = 4,
  value = 5,
  options = 6,
  enabled = 7,
  triggerAttribute = 8,
}
export const TriggerField = {
  id: TriggerElements.id,
  name: TriggerElements.name,
  description: TriggerElements.description,
  type: TriggerElements.type,
  action: TriggerElements.action,
  value: TriggerElements.value,
  options: TriggerElements.options,
  enabled: TriggerElements.enabled,
  triggerAttribute: TriggerElements.triggerAttribute,
};
export const mapAgingDetailsToUpdateItem = (
  aging: Trigger,
  updateType: UpdateType = UpdateType.Update
): Change => {
  const { id } = aging;
  const attribs = Object.keys(aging);
  const allUpdates = attribs.reduce((updates, att) => {
    const field = convertAttributeToField(TriggerField, att, aging[att]);
    if (field) {
      updates.push(field);
    }
    return updates;
  }, []);

  return {
    Category: SystemCategories.AgingConfiguration,
    ObjectId: id,
    Type: updateType,
    Updates: allUpdates,
  };
};
