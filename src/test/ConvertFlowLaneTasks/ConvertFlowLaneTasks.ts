import {
  Change,
  convertAttributeToField,
  SystemCategories,
  UpdateType,
} from "../../SystemCategories";

export interface FlowTask {
  FlowLaneXalertTemplateId: number;
  FlowLaneId?: number | string;
  AlertTemplateId?: number | string;
  SortOrder?: number;
}

export enum FlowTaskProperties {
  id = 0,
  FlowLaneId = 1,
  TaskTemplateId = 2,
  Order = 3,
}

export const createEmptyFlowTask = (): FlowTask => ({
  FlowLaneXalertTemplateId: 0,
  FlowLaneId: 0,
  AlertTemplateId: 0,
  SortOrder: 0,
});

export const FlowTaskField = {
  FlowLaneXalertTemplateId: FlowTaskProperties.id,
  FlowLaneId: FlowTaskProperties.FlowLaneId,
  AlertTemplateId: FlowTaskProperties.TaskTemplateId,
  SortOrder: FlowTaskProperties.Order,
};

export const mapFlowTaskToUpdateItem = (
  flowTask: FlowTask,
  updateType: UpdateType = UpdateType.Update
): Change => {
  const { FlowLaneXalertTemplateId } = flowTask;
  const attribs = Object.keys(flowTask);
  const allUpdates = attribs.reduce((updates, att) => {
    const field = convertAttributeToField(FlowTaskField, att, flowTask[att]);
    if (field) {
      updates.push(field);
    }
    return updates;
  }, []);

  return {
    Category: SystemCategories.FlowLaneTasks,
    ObjectId:
      updateType === UpdateType.Update || updateType === UpdateType.Delete
        ? FlowLaneXalertTemplateId
        : -1,
    Type: updateType,
    Updates: allUpdates,
  };
};
