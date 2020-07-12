import {
  Change,
  convertAttributeToField,
  SystemCategories,
  UpdateType,
} from "../../SystemCategories";
import { AgingDetails } from "../ConvertAgingDetails/ConvertAgingDetails";
import { CertificationTemplate } from "../ConvertCertificationTemplate/ConvertCertificationTemplate";
//import { Results, TaskActions } from "../../ConvertTaskAction";

export enum TaskType {
  Task = 0,
  Action = 1,
  Notification = 2,
  TaskParallel = 3,
  Index = 4,
  TaskRoleParallel = 5,
  TaskOrphan = 6,
}

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

export interface TaskTemplate {
  action: string;
  assignees: any[];
  agingDetails: any[];
  autoActionDays: number;
  autoActionHours: number;
  autoActionMins: number;
  autoDefaultActionId: number;
  autoOwnerActionId: number;
  autoTaskOwnerActionId: number;
  autoApproveTaskTemplateId: number;
  description: string;
  id: number;
  initialTagUpdates: any[];
  managers: any[];
  name: string;
  notificationId: number;
  ownerApprove: boolean;
  taskOwnerApprove: boolean;
  type: string;
  userActions: any[];
  flowLaneId: number;
  certifications: any[];
}

export interface Assignee {
  id: number;
  name: string;
  uniqueGuid: string;
  uniqueId: number;
  location: number;
  type: number;
  user: any;
}

export enum TaskTemplateProperties {
  action = 0,
  assignees = 1,
  agingDetails = 2,
  autoActionDays = 3,
  autoActionHours = 4,
  autoActionMins = 5,
  autoDefaultActionId = 6,
  autoOwnerActionId = 7,
  autoTaskOwnerActionId = 8,
  autoApproveTaskTemplateId = 9,
  description = 10,
  id = 11,
  initialTagUpdates = 12,
  managers = 13,
  name = 14,
  notificationId = 15,
  ownerApprove = 16,
  taskOwnerApprove = 17,
  type = 18,
  userActions = 19,
  flowLaneId = 20,
  certifications = 21,
}

export const createEmptyTaskTemplate = (): TaskTemplate => ({
  action: "",
  assignees: [],
  agingDetails: [],
  autoActionDays: 0,
  autoActionHours: 0,
  autoActionMins: 0,
  autoDefaultActionId: 0,
  autoOwnerActionId: 0,
  autoTaskOwnerActionId: 0,
  autoApproveTaskTemplateId: 0,
  description: "",
  id: 0,
  initialTagUpdates: [],
  managers: [],
  name: "",
  notificationId: 0,
  ownerApprove: false,
  taskOwnerApprove: false,
  type: "",
  userActions: [],
  flowLaneId: 0,
  certifications: [],
});

export const TaskTemplateField = {
  action: TaskTemplateProperties.action,
  assignees: TaskTemplateProperties.assignees,
  agingDetails: TaskTemplateProperties.agingDetails,
  autoActionDays: TaskTemplateProperties.autoActionDays,
  autoActionHours: TaskTemplateProperties.autoActionHours,
  autoActionMins: TaskTemplateProperties.autoActionMins,
  autoDefaultActionId: TaskTemplateProperties.autoDefaultActionId,
  autoOwnerActionId: TaskTemplateProperties.autoOwnerActionId,
  autoTaskOwnerActionId: TaskTemplateProperties.autoTaskOwnerActionId,
  autoApproveTaskTemplateId: TaskTemplateProperties.autoApproveTaskTemplateId,
  description: TaskTemplateProperties.description,
  id: TaskTemplateProperties.id,
  initialTagUpdates: TaskTemplateProperties.initialTagUpdates,
  managers: TaskTemplateProperties.managers,
  name: TaskTemplateProperties.name,
  notificationId: TaskTemplateProperties.notificationId,
  ownerApprove: TaskTemplateProperties.ownerApprove,
  taskOwnerApprove: TaskTemplateProperties.taskOwnerApprove,
  type: TaskTemplateProperties.type,
  userActions: TaskTemplateProperties.userActions,
  flowLaneId: TaskTemplateProperties.flowLaneId,
  certifications: TaskTemplateProperties.certifications,
};
export const mapTaskTemplate1ToUpdateItem = (
  aging: TaskTemplate,
  updateType: UpdateType = UpdateType.Update
): Change => {
  const { id } = aging;
  const attribs = Object.keys(aging);
  const allUpdates = attribs.reduce((updates, att) => {
    const field = convertAttributeToField(TaskTemplateField, att, aging[att]);
    if (field) {
      updates.push(field);
    }
    return updates;
  }, []);

  return {
    Category: SystemCategories.TaskTemplates,
    ObjectId: id,
    Type: updateType,
    Updates: allUpdates,
  };
};

export const mapTaskTemplateToUpdateItem = (
  task: TaskTemplate,
  updateType = UpdateType.Update
): Change => {
  const { id } = task;
  const attribs = Object.keys(task);
  let expire = 0;
  const allUpdates = attribs.reduce((updates, att) => {
    if (att === "autoActionDays") {
      expire += task[att] * 3600 * 24;
    } else if (att == "autoActionHours") {
      expire += task[att] * 3600;
    } else {
      const field = convertAttributeToField(TaskTemplateField, att, task[att]);
      if (field) {
        updates.push(field);
      }
    }
    return updates;
  }, []);
  const expireField = convertAttributeToField(
    TaskTemplateField,
    "autoActionSeconds",
    expire
  );
  allUpdates.push(expireField);

  const updateItem = {
    Category: SystemCategories.TaskTemplates,
    ObjectId: id,
    Type: updateType,
    Updates: allUpdates,
  };
  return updateItem;
};
