import {
  Change,
  convertAttributeToField,
  SystemCategories,
  UpdateType,
} from "../../SystemCategories";

export interface CertificationTemplate {
  id: number;
  templateId: number;
  documentTypeId: number;
  type: CertificationCriteriaType;
  value: string;
  decimal: number;
  date: string;
  failedLevel: CertificationType;
  enabled: boolean;
  updateType?: UpdateType;
}

export enum CertificationType {
  InProgress = -1,
  None = 0,
  Failed = 1,
  Occurred = 2,
  Issues = 3,
  Certified = 4,
}

export enum CertificationCriteriaType {
  ViewedAll = 0,
  Viewed = 1,
  AcknoweledgedAll = 2,
  Acknoweledge = 3,
  Signed = 4,
  Stamped = 5,
  Marked = 6,
  Note = 7,
  Attached = 8,
  Altered = 9,
  NotAltered = 10,
  Actioned = 11,
  Aged = 12,
}

export enum CertificationTemplateElements {
  Id = 0,
  TemplateId = 1,
  DocumentTypeId = 2,
  Type = 3,
  Value = 4,
  Decimal = 5,
  Date = 6,
  FailedLevel = 7,
  Enabled = 8,
}

export const createEmptyCertificationTemplate = (
  templateId: number
): CertificationTemplate => ({
  id: 0,
  templateId,
  documentTypeId: 0,
  type: CertificationCriteriaType.ViewedAll,
  value: "",
  decimal: 0,
  date: "",
  failedLevel: CertificationType.None,
  enabled: true,
});

export const CertificationTemplateField = {
  id: CertificationTemplateElements.Id,
  templateId: CertificationTemplateElements.TemplateId,
  documentTypeId: CertificationTemplateElements.DocumentTypeId,
  type: CertificationTemplateElements.Type,
  value: CertificationTemplateElements.Value,
  decimal: CertificationTemplateElements.Decimal,
  date: CertificationTemplateElements.Date,
  failedLevel: CertificationTemplateElements.FailedLevel,
  enabled: CertificationTemplateElements.Enabled,
};

export const mapCertificationTemplateToUpdateItem = (
  certification: CertificationTemplate,
  updateType: UpdateType = UpdateType.Update
): Change => {
  const { id } = certification;
  const attribs = Object.keys(certification);
  const allUpdates = attribs.reduce((updates, att) => {
    const field = convertAttributeToField(
      CertificationTemplateField,
      att,
      certification[att]
    );
    if (field) {
      updates.push(field);
    }
    return updates;
  }, []);

  return {
    Category: SystemCategories.TaskCertificate,
    ObjectId: id,
    Type: updateType,
    Updates: allUpdates,
  };
};
