import {
  Change,
  convertAttributeToField,
  SystemCategories,
  UpdateType,
} from "../../SystemCategories";
//import { TagUpdate } from "./ConvertTagUpdate";

export interface Results {
  id: number;
  actionId: number;
  name: string;
  type: string;
  unique: number;
  value1: string;
  value2: string;
  valueType: string;
  updates: any;
}

export enum ReasonRequired {
  None = 0,

  ReasonShow = 1,
  ReasonMandatoryShowNote = 2,
  ReasonMandatoryOnly = 3,

  NoteShow = 4,
  NoteMandatoryShowReason = 5,
  NoteMandatoryOnly = 6,

  NoteAndReasonMandatory = 7,
}

export interface TaskActions {
  id: number;
  templateId: number;
  title: string;
  description: string;
  icon: string;
  approvalActionType: any;
  nextTemplateId: number;
  reasonRequired: any;
  reasonSelection: any;
  tagUpdates: any[];
  taskActionTypes: number;
}

export enum TaskActionProperties {
  id = 0,
  templateId = 1,
  title = 2,
  description = 3,
  icon = 4,
  approvalActionType = 5,
  nextTemplateId = 6,
  reasonRequired = 7,
  reasonSelection = 8,
  tagUpdates = 9,
  taskActionTypes = 10,
}

export const createEmptyTaskActions = (templateId: number): TaskActions => ({
  id: 0,
  templateId,
  title: "",
  description: "",
  icon: "",
  approvalActionType: 100,
  nextTemplateId: -1,
  reasonRequired: [],
  reasonSelection: null,
  tagUpdates: [],
  taskActionTypes: 0,
});

export const TaskActionField = {
  id: TaskActionProperties.id,
  templateId: TaskActionProperties.templateId,
  title: TaskActionProperties.title,
  description: TaskActionProperties.description,
  icon: TaskActionProperties.icon,
  approvalActionType: TaskActionProperties.approvalActionType,
  nextTemplateId: TaskActionProperties.nextTemplateId,
  reasonRequired: TaskActionProperties.reasonRequired,
  reasonSelection: TaskActionProperties.reasonSelection,
  tagUpdates: TaskActionProperties.tagUpdates,
  taskActionTypes: TaskActionProperties.taskActionTypes,
};

export const mapTaskActionToUpdateItem = (
  action: TaskActions,
  updateType: UpdateType = UpdateType.Update
): Change => {
  const { id } = action;
  const attribs = Object.keys(action);
  const allUpdates = attribs.reduce((updates, att) => {
    const field = convertAttributeToField(TaskActionField, att, action[att]);
    if (field) {
      updates.push(field);
    }
    return updates;
  }, []);

  return {
    Category: SystemCategories.TaskActions,
    ObjectId: id,
    Type: updateType,
    Updates: allUpdates,
  };
};

export const isTaskActionsOrResults = (
  toBeDetermined: Connector
): toBeDetermined is TaskActions => {
  if ((toBeDetermined as TaskActions).nextTemplateId) {
    return true;
  }
  return false;
};

export const getLabel = (action: Connector) => {
  return isTaskActionsOrResults(action) ? action.title : "n/a";
};

export type Connector = TaskActions | Results;
