import {
  Change,
  convertAttributeToField,
  SystemCategories,
  UpdateType,
} from "../../SystemCategories";
import { Flow } from "../ConvertDocumentTypeTask/ConvertDocumentTypeTask";

export enum FlowProperties {
  Id = 0,
  Name = 1,
  Description = 2,
  DefaultTaskId = 3,
  Owner = 4,
  CreationDate = 5,
  LastModified = 6,
  Enabled = 7,
  documentTypesXEntity = 8,
  lanes = 9,
}

export const createEmptyFlow = (): Flow => ({
  id: 0,
  name: "",
  descritpion: "",
  defaultTaskId: -1,
  owner: "",
  creationDate: "",
  lastModified: "",
  enabled: true,
  documentTypesXEntity: [],
  lanes: [],
});

export const FlowField = {
  id: FlowProperties.Id,
  name: FlowProperties.Name,
  descritpion: FlowProperties.Description,
  defaultTaskId: FlowProperties.DefaultTaskId,
  owner: FlowProperties.Owner,
  creationDate: FlowProperties.CreationDate,
  lastModified: FlowProperties.LastModified,
  enabled: FlowProperties.Enabled,
  documentTypesXEntity: FlowProperties.documentTypesXEntity,
  lanes: FlowProperties.lanes,
};

export const mapFlowToUpdateItem = (
  flow: Flow,
  updateType: UpdateType = UpdateType.Update
) => {
  const { id } = flow;
  const attribs = Object.keys(flow);
  const allUpdates = attribs.reduce((updates, att) => {
    const field = convertAttributeToField(FlowField, att, flow[att]);
    if (field) {
      updates.push(field);
    }
    return updates;
  }, []);

  return {
    Category: SystemCategories.Flows,
    ObjectId: id,
    Type: updateType,
    Updates: allUpdates,
  };
};

export const mapFlowManagementToUpdateItem = (
  flow: Flow,
  updateType: UpdateType = UpdateType.Update
): Change => {
  const { id } = flow;
  const attribs = Object.keys(flow);
  const allUpdates = attribs.reduce((updates, att) => {
    const field = convertAttributeToField(FlowField, att, flow[att]);
    if (field) {
      updates.push(field);
    }
    return updates;
  }, []);

  return {
    Category: SystemCategories.FlowManagement,
    ObjectId: id,
    Type: updateType,
    Updates: allUpdates,
  };
};
