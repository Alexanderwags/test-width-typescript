import { mapLaneToUpdateItem } from "./ConvertLane";
import { UpdateType } from "../../SystemCategories";

const input = {
  flowId: 1,
  description: "",
  enabled: true,
  id: 0,
  name: "wili",
  order: 0,
  tasks: [],
  type: 0,
  maxActions: 0,
};

const output = {
  Category: 6101,
  ObjectId: 0,
  Type: 1,
  Updates: [
    { ItemId: 0, Value: "1" },
    { ItemId: 1, Value: "" },
    { ItemId: 2, Value: "true" },
    { ItemId: 3, Value: "0" },
    { ItemId: 2, Value: "wili" },
    { ItemId: 5, Value: "0" },
    { ItemId: 6, Value: "" },
    { ItemId: 7, Value: "0" },
    { ItemId: 8, Value: "0" },
  ],
};

describe("Test ConvertLane", () => {
  test("Map object correctly", () => {
    expect(mapLaneToUpdateItem(input, UpdateType.Update)).toMatchObject(output);
  });
});
