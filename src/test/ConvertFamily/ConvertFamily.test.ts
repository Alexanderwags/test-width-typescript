import { mapFamilyToUpdateItem } from "./ConvertFamily";
import { UpdateType } from "../../SystemCategories";

const input = {
  id: 0,
  name: "",
  description: "110",
  logoId: "89",
  enabled: true,
  type: 0,
  viewType: 0,
  groupBy: 0,
  relations: {},
};

const output = {
  Category: 4020,
  ObjectId: 0,
  Type: 1,
  Updates: [
    { ItemId: 0, Value: "0" },
    { ItemId: 1, Value: "" },
    { ItemId: 2, Value: "110" },
    { ItemId: 3, Value: "89" },
    { ItemId: 4, Value: "true" },
    { ItemId: 5, Value: "0" },
    { ItemId: 6, Value: "0" },
    { ItemId: 7, Value: "0" },
    { ItemId: 8, Value: {} },
  ],
};

describe("Test ConvertFamily", () => {
  test("Map object correctly", () => {
    expect(mapFamilyToUpdateItem(input, UpdateType.Update)).toMatchObject(
      output
    );
  });
});
