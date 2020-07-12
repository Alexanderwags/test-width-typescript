import { mapFlowTaskToUpdateItem } from "./ConvertFlowLaneTasks";
import { UpdateType } from "../../SystemCategories";

const input = {
  FlowLaneXalertTemplateId: 0,
  FlowLaneId: 0,
  AlertTemplateId: 0,
  SortOrder: 0,
};

const output = {
  Category: 6102,
  ObjectId: 0,
  Type: 1,
  Updates: [
    { ItemId: 0, Value: "0" },
    { ItemId: 1, Value: "0" },
    { ItemId: 2, Value: "0" },
    { ItemId: 3, Value: "0" },
  ],
};

describe("Test ConvertFlow.test.ts", () => {
  test("Map object correctly", () => {
    expect(mapFlowTaskToUpdateItem(input, UpdateType.Update)).toMatchObject(
      output
    );
  });
});
