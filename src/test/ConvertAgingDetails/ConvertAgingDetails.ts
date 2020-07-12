import {
  Change,
  convertAttributeToField,
  SystemCategories,
  UpdateType,
} from "../../SystemCategories";

export interface AgingDetails {
  id: number;
  documentTypeId: number;
  taskTemplateId: number;
  dateSource: AgingDataSource;
  dateSourceTagId: number;
  operation1: AgingOpertations;
  operation1Value: number;
  operation2: AgingOpertations;
  operation2Value: number;
  agingState: AgingStatus;
  updateType?: UpdateType;
}

export enum AgingStatus {
  Normal = 0,
  Aging = 1,
  Aged = 2,
  Critical = 3,
}

export enum AgingDataSource {
  Disbaled = -1,
  Default = 0,
  CurrentDate = 1,
  DocumentCreatedDate = 2,
  TaskCreatedDate = 3,
  TagValue = 4,
  External = 5,
}

export enum AgingOpertations {
  Disabled = -1,
  AddDay = 1,
  AddWeek = 2,
  AddMonth = 3,
  NextDayofWeek = 4,
  NextDayofMonth = 5,
  LastDayofMonth = 6,
  AddHours = 7,
  NextHour = 8,
}

export enum AgingDetailsElements {
  Id = 0,
  DocumentTypeId = 1,
  TaskTemplateId = 2,
  DateSource = 3,
  DateSourceTagId = 4,
  Operation1 = 5,
  Operation1Value = 6,
  Operation2 = 7,
  Operation1Value2 = 8,
  AgingState = 9,
}

export const createEmptyAgingDetails = (templateId: number): AgingDetails => ({
  id: 0,
  documentTypeId: 0,
  taskTemplateId: templateId,
  dateSource: AgingDataSource.Default,
  dateSourceTagId: 0,
  operation1: AgingOpertations.AddDay,
  operation1Value: 0,
  operation2: AgingOpertations.AddDay,
  operation2Value: 0,
  agingState: AgingStatus.Normal,
});

export const AgingDetailsField = {
  id: AgingDetailsElements.Id,
  documentTypeId: AgingDetailsElements.DocumentTypeId,
  taskTemplateId: AgingDetailsElements.TaskTemplateId,
  dateSource: AgingDetailsElements.DateSource,
  dateSourceTagId: AgingDetailsElements.DateSourceTagId,
  operation1: AgingDetailsElements.Operation1,
  operation1Value: AgingDetailsElements.Operation1Value,
  operation2: AgingDetailsElements.Operation2,
  operation2Value: AgingDetailsElements.Operation1Value2,
  agingState: AgingDetailsElements.AgingState,
};

export const mapAgingDetailsToUpdateItem = (
  aging: AgingDetails,
  updateType: UpdateType = UpdateType.Update
): Change => {
  const { id } = aging;
  const attribs = Object.keys(aging);
  const allUpdates = attribs.reduce((updates, att) => {
    const field = convertAttributeToField(AgingDetailsField, att, aging[att]);
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
