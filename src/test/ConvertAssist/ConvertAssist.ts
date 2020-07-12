import {
  Change,
  convertAttributeToField,
  SystemCategories,
  UpdateType,
} from "../../SystemCategories";

export const createEmptyAssistAdmin = (): AssistAdmin => ({
  id: 0,
  name: "",
  description: "",
  assistType: 0,
  documentTypeId: 0,
  serverity: -1,
  options: [],
  entityId: -1,
  order: 0,
  enabled: true,
});

export interface AssistAdmin {
  id: number;
  name: string;
  description: string;
  assistType: number;
  documentTypeId: number;
  serverity: number;
  options: any[];
  entityId: number;
  order: number;
  enabled: boolean;
}
export enum AssistAdminElements {
  id = 0,
  name = 1,
  description = 2,
  assistType = 3,
  documentTypeId = 4,
  serverity = 5,
  options = 6,
  entityId = 7,
  order = 8,
  enabled = 9,
}
export const AssistAdminField = {
  id: AssistAdminElements.id,
  name: AssistAdminElements.name,
  description: AssistAdminElements.description,
  assistType: AssistAdminElements.assistType,
  documentTypeId: AssistAdminElements.documentTypeId,
  serverity: AssistAdminElements.serverity,
  options: AssistAdminElements.options,
  entityId: AssistAdminElements.entityId,
  order: AssistAdminElements.order,
  enabled: AssistAdminElements.enabled,
};
export const mapAssistAdminToUpdateItem = (
  aging: AssistAdmin,
  updateType: UpdateType = UpdateType.Update
): Change => {
  const { id } = aging;
  const attribs = Object.keys(aging);
  const allUpdates = attribs.reduce((updates, att) => {
    const field = convertAttributeToField(AssistAdminField, att, aging[att]);
    if (field) {
      updates.push(field);
    }
    return updates;
  }, []);

  return {
    Category: SystemCategories.Assists,
    ObjectId: id,
    Type: updateType,
    Updates: allUpdates,
  };
};
