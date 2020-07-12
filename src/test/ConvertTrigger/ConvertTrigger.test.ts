import { mapAgingDetailsToUpdateItem } from "./ConvertTrigger";
import { UpdateType } from "../../SystemCategories";

const input = {
  id: 0,
  name: "",
  description: "",
  type: 0,
  action: 0,
  value: 0,
  options: "",
  enabled: true,
  triggerAttribute: [],
};

const output = {
  Category: 4011,
  ObjectId: 0,
  Type: 1,
  Updates: [
    { ItemId: 0, Value: "0" },
    { ItemId: 1, Value: "" },
    { ItemId: 2, Value: "" },
    { ItemId: 3, Value: "0" },
    { ItemId: 4, Value: "0" },
    { ItemId: 5, Value: "0" },
    { ItemId: 6, Value: "" },
    { ItemId: 7, Value: "true" },
    { ItemId: 8, Value: "" },
  ],
};

describe("Test ConvertAgingDetails", () => {
  test("Map object correctly", () => {
    expect(mapAgingDetailsToUpdateItem(input, UpdateType.Update)).toMatchObject(
      output
    );
  });
});
