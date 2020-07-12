import { mapTaskActionToUpdateItem } from "./ConvertTaskAction";
import { UpdateType } from "../../SystemCategories";

const input = {
  id: 0,
  templateId: 0,
  title: "",
  description: "",
  icon: "",
  approvalActionType: 100,
  nextTemplateId: 1,
  reasonRequired: [],
  reasonSelection: [],
  tagUpdates: [],
  taskActionTypes: 0,
};

const output = {
  Category: 6003,
  ObjectId: 0,
  Type: 1,
  Updates: [
    { ItemId: 0, Value: "0" },
    { ItemId: 1, Value: "0" },
    { ItemId: 2, Value: "" },
    { ItemId: 3, Value: "" },
    { ItemId: 4, Value: "" },
    { ItemId: 5, Value: "100" },
    { ItemId: 6, Value: "1" },
    { ItemId: 7, Value: "" },
    { ItemId: 8, Value: "" },
    { ItemId: 9, Value: "" },
    { ItemId: 10, Value: "0" },
  ],
};

describe("Test ConvertTaskAction", () => {
  test("Map object correctly", () => {
    expect(mapTaskActionToUpdateItem(input, UpdateType.Update)).toMatchObject(
      output
    );
  });
});
