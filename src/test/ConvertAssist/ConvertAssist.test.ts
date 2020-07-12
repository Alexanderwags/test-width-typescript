import { mapAssistAdminToUpdateItem } from "./ConvertAssist";
import { UpdateType } from "../../SystemCategories";

const input = {
  id: 0,
  name: "",
  description: "",
  assistType: 0,
  documentTypeId: 0,
  serverity: 1,
  options: [],
  entityId: 1,
  order: 0,
  enabled: true,
};

const output = {
  Category: 9000,
  ObjectId: 0,
  Type: 1,
  Updates: [
    { ItemId: 0, Value: "0" },
    { ItemId: 1, Value: "" },
    { ItemId: 2, Value: "" },
    { ItemId: 3, Value: "0" },
    { ItemId: 4, Value: "0" },
    { ItemId: 5, Value: "1" },
    { ItemId: 6, Value: "" },
    { ItemId: 7, Value: "1" },
    { ItemId: 8, Value: "0" },
    { ItemId: 9, Value: "true" },
  ],
};

describe("Test ConvertAgingDetails", () => {
  test("Map object correctly", () => {
    expect(mapAssistAdminToUpdateItem(input, UpdateType.Update)).toMatchObject(
      output
    );
  });
});
