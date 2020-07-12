//import {TagUpdate} from "../tags/TagUpdate";
import {
  Change,
  convertAttributeToField,
  SystemCategories,
  UpdateType,
} from "../../SystemCategories";

export const createEmptyAction = (): Action => ({
  id: 0,
  name: "",
  description: "",
  type: "",
  groupId: 0,
  typeId: 0,
  locationId: 0,
  username: "",
  password: "",
  order: 0,
  parameters: [],
  results: [],
  enabled: true,
});

export interface Action {
  id: number;
  name: string;
  description: string;
  type: string;
  groupId: number;
  typeId: number;
  locationId: number;
  username: string;
  password: string;
  order: number;
  parameters: any[];
  results: any[];
  enabled: boolean;
}

export interface Results {
  id: number;
  actionId: number;
  name: string;
  type: string;
  unique: number;
  value1: string;
  value2: string;
  valueType: string;
  //updates: TagUpdate[];
}

export interface ActionNext {
  id: number;
  description: string;
}
export enum ActionElements {
  id = 0,
  name = 1,
  description = 2,
  type = 3,
  groupId = 4,
  typeId = 5,
  locationId = 6,
  username = 7,
  password = 8,
  order = 9,
  parameters = 10,
  results = 11,
  enabled = 12,
}
export const ActionField = {
  id: ActionElements.id,
  name: ActionElements.name,
  description: ActionElements.description,
  type: ActionElements.type,
  groupId: ActionElements.groupId,
  typeId: ActionElements.typeId,
  locationId: ActionElements.locationId,
  username: ActionElements.username,
  password: ActionElements.password,
  order: ActionElements.order,
  parameters: ActionElements.parameters,
  results: ActionElements.results,
  enabled: ActionElements.enabled,
};
export const mapActionToUpdateItem = (
  aging: Action,
  updateType: UpdateType = UpdateType.Update
): Change => {
  const { id } = aging;
  const attribs = Object.keys(aging);
  const allUpdates = attribs.reduce((updates, att) => {
    const field = convertAttributeToField(ActionField, att, aging[att]);
    if (field) {
      updates.push(field);
    }
    return updates;
  }, []);

  return {
    Category: SystemCategories.Actions,
    ObjectId: id,
    Type: updateType,
    Updates: allUpdates,
  };
};
