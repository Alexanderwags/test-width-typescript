import {
  convertAttributeToField,
  SystemCategories,
  UpdateType,
} from "../../SystemCategories";

export interface TagUpdate {
  documentId?: number;
  tagId: number;
  value: string;
}

export enum TaskUpdateElements {
  Id = 0,
  Name = 1,
  ActionId = 2,
  Type = 3,
  TagId = 4,
  Value = 5,
  DataSourceId = 6,
}

export type TagUpdateType = "TAG" | "TASKTAG";

export interface TaskUpdate {
  Id: number;
  Name: string;
  ActionId: number;
  Type: string;
  TagId: number;
  Value: string;
  DataSourceId: number;
}

export const TagUpdateField = {
  Id: TaskUpdateElements.Id,
  Name: TaskUpdateElements.Name,
  ActionId: TaskUpdateElements.ActionId,
  Type: TaskUpdateElements.Type,
  TagId: TaskUpdateElements.TagId,
  Value: TaskUpdateElements.Value,
  DataSourceId: TaskUpdateElements.DataSourceId,
};

export const mapToTagUpdate = (
  tagUpdates: TagUpdate[],
  actionId,
  type: TagUpdateType
) =>
  tagUpdates.map((t) => ({
    ...t,
    actionId,
    name: t.value,
    type,
  }));

export const mapTagUpdateToUpdateItem = (
  tagUpdate: TaskUpdate,
  updateType: UpdateType = UpdateType.Update
) => {
  const { Id } = tagUpdate;
  const attribs = Object.keys(tagUpdate);
  const allUpdates = attribs.reduce((updates, att) => {
    const field = convertAttributeToField(TagUpdateField, att, tagUpdate[att]);
    if (field) {
      updates.push(field);
    }
    return updates;
  }, []);

  return {
    Category: SystemCategories.TaskUpdate,
    ObjectId: Id,
    Type: updateType,
    Updates: allUpdates,
  };
};
