import {
  Change,
  convertAttributeToField,
  SystemCategories,
  UpdateType,
} from "../../SystemCategories";

export const createEmptyFamily = (): Family => ({
  id: 0,
  name: "",
  description: "",
  logoId: "",
  enabled: true,
  type: 0,
  viewType: 0,
  groupBy: 0,
  relations: {},
});

export interface Family {
  id: number;
  name: string;
  description: string;
  logoId: string;
  enabled: boolean;
  type: number;
  viewType: number;
  groupBy: number;
  relations: any;
}
export enum FamilyProperties {
  id = 0,
  name = 1,
  description = 2,
  logoId = 3,
  enabled = 4,
  type = 5,
  viewType = 6,
  groupBy = 7,
  relations = 8,
}
export const FamilyField = {
  id: FamilyProperties.id,
  name: FamilyProperties.name,
  description: FamilyProperties.description,
  logoId: FamilyProperties.logoId,
  enabled: FamilyProperties.enabled,
  type: FamilyProperties.type,
  viewType: FamilyProperties.viewType,
  groupBy: FamilyProperties.groupBy,
  relations: FamilyProperties.relations,
};
export const mapFamilyToUpdateItem = (
  aging: Family,
  updateType: UpdateType = UpdateType.Update
): Change => {
  const { id } = aging;
  const attribs = Object.keys(aging);
  const allUpdates = attribs.reduce((updates, att) => {
    const field = convertAttributeToField(FamilyField, att, aging[att]);
    if (field) {
      updates.push(field);
    }
    return updates;
  }, []);

  return {
    Category: SystemCategories.Families,
    ObjectId: id,
    Type: updateType,
    Updates: allUpdates,
  };
};
