import { mapTagUpdateToUpdateItem } from "./ConvertTagUpdate";
import { UpdateType } from "../../SystemCategories";

const input = {
  Id: 0,
  Name: "",
  ActionId: 0,
  Type: "",
  TagId: 0,
  Value: "",
  DataSourceId: 0,
};

const output = {
  Category: 6005,
  ObjectId: 0,
  Type: 1,
  Updates: [
    { ItemId: 0, Value: "0" },
    { ItemId: 1, Value: "" },
    { ItemId: 2, Value: "0" },
    { ItemId: 3, Value: "" },
    { ItemId: 4, Value: "0" },
    { ItemId: 5, Value: "" },
    { ItemId: 6, Value: "0" },
  ],
};

describe("Test ConvertFlow.test.ts", () => {
  test("Map object correctly", () => {
    expect(mapTagUpdateToUpdateItem(input, UpdateType.Update)).toMatchObject(
      output
    );
  });
});
