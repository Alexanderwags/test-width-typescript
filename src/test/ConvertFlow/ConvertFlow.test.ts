import {
  mapFlowToUpdateItem,
  mapFlowManagementToUpdateItem,
} from "./ConvertFlow";
import { UpdateType } from "../../SystemCategories";

const input = {
  id: 0,
  name: "",
  descritpion: "",
  defaultTaskId: 1,
  owner: "",
  creationDate: "",
  lastModified: "",
  enabled: true,
  documentTypesXEntity: [],
  lanes: [],
};

const output = {
  Category: 6100,
  ObjectId: 0,
  Type: 1,
  Updates: [
    { ItemId: 0, Value: "0" },
    { ItemId: 1, Value: "" },
    { ItemId: 2, Value: "" },
    { ItemId: 3, Value: "1" },
    { ItemId: 4, Value: "" },
    { ItemId: 5, Value: "" },
    { ItemId: 6, Value: "" },
    { ItemId: 7, Value: "true" },
    { ItemId: 8, Value: "" },
    { ItemId: 9, Value: "" },
  ],
};

describe("Test ConvertFlow.test.ts", () => {
  test("Map object correctly", () => {
    expect(mapFlowToUpdateItem(input, UpdateType.Update)).toMatchObject(output);
  });
});
