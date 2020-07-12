import { mapDocumentTypeTaskToUpdateItem } from "./ConvertDocumentTypeTask";
import { UpdateType } from "../../SystemCategories";

const input = {
  Id: 2,
  DocumentTypeId: 2,
  TaskTemplateId: 2,
  StartType: "work",
  FlowId: 2,
  EntityId: 2,
};

const output = {
  Category: 6103,
  ObjectId: -1,
  Type: 1,
  Updates: [
    { ItemId: 0, Value: "2" },
    { ItemId: 1, Value: "2" },
    { ItemId: 2, Value: "2" },
    { ItemId: 3, Value: "work" },
    { ItemId: 4, Value: "2" },
    { ItemId: 5, Value: "2" },
  ],
};

describe("Test ConvertDocumentTypeTask", () => {
  test("Map object correctly", () => {
    expect(
      mapDocumentTypeTaskToUpdateItem(input, UpdateType.Update)
    ).toMatchObject(output);
  });
});
