import {
  convertAttributeToField,
  SystemCategories,
  UpdateType,
} from "../../SystemCategories";

export enum TaskUserProperties {
  Id = 0,
  TemplateId = 1,
  UniqueGuid = 2,
  UserType = 3,
  UniqueId = 4,
}

export interface TaskUser {
  id: number;
  templateId: number;
  uniqueGuid: string;
  userType: string;
  uniqueId: number;
}

export const TaskUserField = {
  id: TaskUserProperties.Id,
  templateId: TaskUserProperties.TemplateId,
  uniqueGuid: TaskUserProperties.UniqueGuid,
  userType: TaskUserProperties.UserType,
  uniqueId: TaskUserProperties.UniqueId,
};

export const mapTaskUserToUpdateItem = (
  taskUser: TaskUser,
  updateType: UpdateType = UpdateType.Update
) => {
  const { id } = taskUser;
  const attribs = Object.keys(taskUser);
  const allUpdates = attribs.reduce((updates, att) => {
    const field = convertAttributeToField(TaskUserField, att, taskUser[att]);
    if (field) {
      updates.push(field);
    }
    return updates;
  }, []);

  return {
    Category: SystemCategories.TaskUsers,
    ObjectId: id,
    Type: updateType,
    Updates: allUpdates,
  };
};
