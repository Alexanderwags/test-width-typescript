//import {DocumentType, initials, TrackView} from "../taskdetail/Tasks";
import {
  Change,
  convertAttributeToField,
  SystemCategories,
  UpdateType,
} from "../../SystemCategories";

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
export const createEmptyDocType = (): DocumentType => ({
  id: 0,
  name: "",
  description: "",
  logoId: 0,
  defaultLocationId: 0,
  encrypted: "",
  convert: "",
  protect: "",
  revisions: "",
  archiveDay: 0,
  archiveMonth: 0,
  archiveYear: 0,
  destructionDay: 0,
  destructionMonth: 0,
  destructionYear: 0,
  security: "",
  ocr: "",
  trackViews: [],
  initial: [],
});
export enum DocumentTypeElements {
  id = 0,
  name = 1,
  description = 2,
  logoId = 3,
  defaultLocationId = 4,
  encrypted = 5,
  convert = 6,
  protect = 7,
  revisions = 8,
  archiveDay = 9,
  archiveMonth = 10,
  archiveYear = 11,
  destructionDay = 12,
  destructionMonth = 13,
  destructionYear = 14,
  security = 15,
  ocr = 16,
  trackViews = 17,
  initial = 18,
}
export const DocumentTypeField = {
  id: DocumentTypeElements.id,
  name: DocumentTypeElements.name,
  description: DocumentTypeElements.description,
  logoId: DocumentTypeElements.logoId,
  defaultLocationId: DocumentTypeElements.defaultLocationId,
  encrypted: DocumentTypeElements.encrypted,
  convert: DocumentTypeElements.convert,
  protect: DocumentTypeElements.protect,
  revisions: DocumentTypeElements.revisions,
  archiveDay: DocumentTypeElements.archiveDay,
  archiveMonth: DocumentTypeElements.archiveMonth,
  archiveYear: DocumentTypeElements.archiveYear,
  destructionDay: DocumentTypeElements.destructionDay,
  destructionMonth: DocumentTypeElements.destructionMonth,
  destructionYear: DocumentTypeElements.destructionYear,
  security: DocumentTypeElements.security,
  ocr: DocumentTypeElements.ocr,
  trackViews: DocumentTypeElements.trackViews,
  initial: DocumentTypeElements.initial,
};
export const mapDocTypeToUpdateItem = (
  aging: DocumentType,
  updateType: UpdateType = UpdateType.Update
): Change => {
  const { id } = aging;
  const attribs = Object.keys(aging);
  const allUpdates = attribs.reduce((updates, att) => {
    const field = convertAttributeToField(DocumentTypeField, att, aging[att]);
    if (field) {
      updates.push(field);
    }
    return updates;
  }, []);

  return {
    Category: SystemCategories.DocumentType,
    ObjectId: id,
    Type: updateType,
    Updates: allUpdates,
  };
};
