import { mapActionToUpdateItem } from "./ConvertAction";
import { UpdateType } from "../../SystemCategories";

const input = {
  id: 0,
  name: "",
  description: "",
  type: "",
  groupId: 10,
  typeId: 10,
  locationId: 10,
  username: "",
  password: "",
  order: 0,
  parameters: [],
  results: [],
  enabled: true,
};

const output = {
  Category: 9200,
  ObjectId: 0,
  Type: 1,
  Updates: [
    { ItemId: 0, Value: "0" },
    { ItemId: 1, Value: "" },
    { ItemId: 2, Value: "" },
    { ItemId: 3, Value: "" },
    { ItemId: 4, Value: "10" },
    { ItemId: 5, Value: "10" },
    { ItemId: 6, Value: "10" },
    { ItemId: 7, Value: "" },
    { ItemId: 8, Value: "" },
    { ItemId: 9, Value: "0" },
    { ItemId: 10, Value: "" },
    { ItemId: 11, Value: "" },
    { ItemId: 12, Value: "true" },
  ],
};

describe("Test ConvertAcrionTest", () => {
  test("Map object correctly", () => {
    expect(mapActionToUpdateItem(input, UpdateType.Update)).toMatchObject(
      output
    );
  });
});
