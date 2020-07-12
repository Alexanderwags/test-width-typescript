import { mapAgingDetailsToUpdateItem } from "./ConvertAgingDetails";
import { UpdateType } from "../../SystemCategories";

const input = {
  id: 2,
  documentTypeId: -1,
  taskTemplateId: -1,
  dateSource: 2,
  dateSourceTagId: -1,
  operation1: 1,
  operation1Value: 10,
  operation2: 0,
  operation2Value: 0,
  agingState: 3,
  updateType: 1,
};

const output = {
  Category: 4011,
  ObjectId: 2,
  Type: 1,
  Updates: [
    { ItemId: 0, Value: "2" },
    { ItemId: 1, Value: "-1" },
    { ItemId: 2, Value: "-1" },
    { ItemId: 3, Value: "2" },
    { ItemId: 4, Value: "-1" },
    { ItemId: 5, Value: "1" },
    { ItemId: 6, Value: "10" },
    { ItemId: 7, Value: "0" },
    { ItemId: 8, Value: "0" },
    { ItemId: 9, Value: "3" },
  ],
};

describe("Test ConvertAgingDetails", () => {
  test("Map object correctly", () => {
    expect(mapAgingDetailsToUpdateItem(input, UpdateType.Update)).toMatchObject(
      output
    );
  });
});
