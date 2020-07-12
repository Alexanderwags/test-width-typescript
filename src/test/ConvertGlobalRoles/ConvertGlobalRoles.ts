import {
  Change,
  convertAttributeToField,
  SystemCategories,
  UpdateType,
} from "../../SystemCategories";

export const GlobalRolePath = `administration/list?Category=${SystemCategories.GlobalRoles}`;

export enum GlobalRoleProperties {
  Id = 0,
  Name = 1,
  Description = 2,
  RoleType = 3,
  Roles = 4,
}

export interface GlobalRole {
  id: number;
  name: string;
  description: string;
  roleType: number;
  roles: any;
}

export const createEmptyGlobalRole = (): GlobalRole => ({
  id: 0,
  name: "",
  description: "",
  roleType: 0,
  roles: {},
});

export const TaskUserField = {
  id: GlobalRoleProperties.Id,
  name: GlobalRoleProperties.Name,
  description: GlobalRoleProperties.Description,
  roleType: GlobalRoleProperties.RoleType,
  roles: GlobalRoleProperties.Roles,
};

export const mapGlobalRoleToUpdateItem = (
  globalRole: GlobalRole,
  updateType: UpdateType = UpdateType.Update,
  note: any
): Change => {
  const { id } = globalRole;
  const attribs = Object.keys(globalRole);
  const allUpdates = attribs.reduce((updates, att) => {
    const field = convertAttributeToField(TaskUserField, att, globalRole[att]);
    if (field) {
      updates.push(field);
    }
    return updates;
  }, []);

  return {
    Category: SystemCategories.GlobalRoles,
    ObjectId: id,
    Type: updateType,
    Updates: allUpdates,
    Note: note,
  };
};
