export enum SystemCategories {
  // Administration Views

  // User Management
  User = 2000,
  Roles = 2001,

  GlobalRoles = 2002,
  GlobalChildRoles = 2003,

  Profiles = 2010,
  ProfileSettings = 2011,

  // Entity Management
  Entity = 3000,
  EntityOptions = 3001,

  // Configuration Management
  EntityStructure = 3100,
  SecurityGroupStructure = 3101,
  DepartmentTypeStructure = 3102,
  DepartmentStructure = 3103,
  UserRolesStructure = 3104,

  // Taxonomy
  DocumentType = 4000,
  DocumentGroup = 4001,
  DocumentTags = 4002,
  DocumentGroupTags = 4003,

  PackManagement = 4010,
  AgingConfiguration = 4011,

  Families = 4020,

  Locations = 4100,

  Security = 4200,

  // Lists
  Lists = 5000,
  DataSource = 5001,
  LookUps = 5002,
  Validation = 5003,

  // Workflow
  FlowManagement = 6000,
  TaskTemplates = 6001,
  TaskUsers = 6002,
  TaskActions = 6003,
  TaskNotifications = 6004,
  TaskUpdate = 6005,
  TaskCertificate = 6006,

  Flows = 6100,
  FlowLane = 6101,
  FlowLaneTasks = 6102,
  FlowDocumentTypes = 6103,

  // Forms
  Forms = 7000,
  FormSections = 7001,
  FormGroups = 7002,
  MasterQuestions = 7003,
  FormSecurity = 7004,

  FormQuestions = 7010,
  FormXSections = 7011,

  // Analyse
  DashboardManagement = 8000,
  ReportManagement = 8001,
  AnalysisManagement = 8002,

  // Automation
  Assists = 9000,
  AssistParameters = 9001,

  Triggers = 9100,
  TriggerParameters = 9101,

  Actions = 9200,
  ActionParameters = 9201,
  ActionResults = 9202,

  ExportingMetadata = 9300,
  ImportManagement = 9400,

  TransferManagement = 9500,

  // External Access
  ExternalViewTokens = 10000,
  VendorPortalManagement = 10001,

  // Connected Services
  ConnectedServices = 11000,

  // System Setup
  Settings = 12000,
  Licenses = 12001,
  Services = 12002,
  SystemConfiguration = 12003,
  EmailTemplates = 12004,
  MaintenanceItems = 12005,

  // Structure
  StructureSchema = 20000,
  StructureSchemaEntity = 20001,

  StructureSecureContainer = 20100,
  StructureSecureContainerSchema = 20101,

  StructureCompartment = 20200,
  StructureCompartmentType = 20201,
  StructureCompartmentTypeSchema = 20202,
  StructureCompartmentTypeContainer = 20203,

  StructureUserRole = 20300,
  StructureUserRoleSchema = 20301
}

export interface Change {
  Category: SystemCategories;
  ObjectId: number;
  Type: UpdateType;
  Updates: AdminField[];
  ObjectUnique?: string;
  Order?: number;
  Note?: any;
}

export enum UpdateType {
  Create = 0,
  Update = 1,
  Read = 3,
  Delete = 4
}

export interface AdminField {
  ItemId: number;
  Name?: string;
  Value: string;
  Order?: number;
}

export const mapToPascalCase = (obj: any) => {
  const newObj = {};
  for (const attr in obj) {
    const pascalCaseAttr = attr.replace(/^./, attr[0].toUpperCase());
    newObj[pascalCaseAttr] = obj[attr];
  }
  return newObj;
};

export const mapArrayToPascalCase = <T>(array: any[]): T[] =>
  array.map((a) => mapToPascalCase(a)) as T[];

export const convertAttributeToField = (
  map: any,
  att: string,
  value: any
): AdminField =>
  map[att] !== undefined && {
    ItemId: map[att],
    Value: `${value}`
  };

export const getEnumKeys = (enumType) => {
  const types = {};
  for (const key in enumType) {
    const isValueProperty = parseInt(key) >= 0;
    if (isValueProperty) {
      types[key] = enumType[key];
    }
  }
  return types;
};

export const createDropdownSelections = (
  items: any[],
  keyAttr: string,
  valueAttr: string
) => {
  return items?.reduce((allItems, item) => {
    const key = item[keyAttr];
    const value = item[valueAttr];
    allItems[key] = value;
    return allItems;
  }, {});
};

export interface Modification {
  updateType: UpdateType;
}

export const withModifications = <T extends unknown, U extends Modification>(
  tt: T[]
): U[] => {
  tt.forEach((t) => {
    withModification<T, U>(t);
  });
  return tt as U[];
};

export const withModification = <T extends unknown, U extends Modification>(
  t: T
): U => {
  (t as U).updateType = UpdateType.Read;
  return t as U;
};
