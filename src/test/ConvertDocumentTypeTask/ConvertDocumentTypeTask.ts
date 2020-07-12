import {
  convertAttributeToField,
  SystemCategories,
  UpdateType,
} from "../../SystemCategories";

export interface Flow {
  creationDate: string;
  defaultTaskId: number | string;
  descritpion: string;
  documentTypesXEntity: DocumentTypesXEntity[];
  enabled: boolean;
  id: number;
  lanes: any[];
  lastModified: string;
  name: string;
  owner: string;
}

export interface DocumentType {
  id: number;
  name: string;
  description: string;
  logoId: number;
  defaultLocationId: number;
  encrypted: string;
  convert: string;
  protect: string;
  revisions: string;
  archiveDay: number;
  archiveMonth: number;
  archiveYear: number;
  destructionDay: number;
  destructionMonth: number;
  destructionYear: number;
  security: string;
  ocr: string;
  trackViews: any;
  initial: any;
}

export interface DocumentTypeTask {
  Id: number;
  DocumentTypeId: number;
  TaskTemplateId?: number;
  StartType?: string;
  FlowId: number;
  EntityId: number;
}

export enum DocumentTypeTaskProperties {
  Id = 0,
  DocumentTypeId = 1,
  TaskTemplateId = 2,
  StartType = 3,
  FlowId = 4,
  EntityId = 5,
}

export const createEmptyDocumentTypeTask = (): DocumentTypeTask => ({
  Id: 0,
  DocumentTypeId: 0,
  FlowId: 0,
  EntityId: 0,
});

export const DocumentTypeTaskField = {
  Id: DocumentTypeTaskProperties.Id,
  FlowId: DocumentTypeTaskProperties.FlowId,
  DocumentTypeId: DocumentTypeTaskProperties.DocumentTypeId,
  TaskTemplateId: DocumentTypeTaskProperties.TaskTemplateId,
  StartType: DocumentTypeTaskProperties.StartType,
  EntityId: DocumentTypeTaskProperties.EntityId,
};

export const mapDocumentTypeTaskToUpdateItem = (
  doc: DocumentTypeTask,
  updateType: UpdateType = UpdateType.Update
) => {
  const { Id } = doc;
  const attribs = Object.keys(doc);
  const allUpdates = attribs.reduce((updates, att) => {
    const field = convertAttributeToField(DocumentTypeTaskField, att, doc[att]);
    if (field) {
      updates.push(field);
    }
    return updates;
  }, []);

  return {
    Category: SystemCategories.FlowDocumentTypes,
    ObjectId: updateType === UpdateType.Delete ? Id : -1,
    Type: updateType,
    Updates: allUpdates,
  };
};

export const mapToDocumentTypeTask = (
  flow: Flow,
  doc: DocumentTypeXEntity
): DocumentTypeTask => ({
  Id: doc.id,
  DocumentTypeId: doc.documentType.id,
  EntityId: doc.entityId,
  FlowId: flow.id,
});

export const flattenEntityDocs = (
  originals: DocumentTypesXEntity[]
): DocumentTypeXEntity[] => {
  const flattens: DocumentTypeXEntity[] = [];
  originals?.forEach((e) => {
    e.documentTypes?.forEach((d) => {
      const entityDoc: DocumentTypeXEntity = {
        id: e.id,
        entityId: e.entityId,
        documentType: d,
      };
      flattens.push(entityDoc);
    });
  });
  return flattens;
};

export interface DocumentTypeXEntity {
  id: number;
  entityId: number;
  documentType: DocumentType;
}

export interface DocumentTypesXEntity {
  id: number;
  entityId: number;
  documentTypes: DocumentType[];
}

export const createEmptyDocumentTypeXEntity = () => ({
  id: 0,
  entityId: -1,
  documentType: null,
});
