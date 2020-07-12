import {
  mapTaskTemplate1ToUpdateItem,
  mapTaskTemplateToUpdateItem,
} from "./ConvertTaskTemplate";
import { UpdateType } from "../../SystemCategories";

const input = {
  action: "",
  assignees: [],
  agingDetails: [],
  autoActionDays: 10,
  autoActionHours: 10,
  autoActionMins: 10,
  autoDefaultActionId: 10,
  autoOwnerActionId: 10,
  autoTaskOwnerActionId: 10,
  autoApproveTaskTemplateId: 10,
  description: "",
  id: 0,
  initialTagUpdates: [],
  managers: [],
  name: "",
  notificationId: 0,
  ownerApprove: false,
  taskOwnerApprove: false,
  type: "",
  userActions: [],
  flowLaneId: 0,
  certifications: [],
};

const output = {
  Category: 6001,
  ObjectId: 0,
  Type: 1,
  Updates: [
    { ItemId: 0, Value: "" },
    { ItemId: 1, Value: "" },
    { ItemId: 2, Value: "" },
    { ItemId: 3, Value: "10" },
    { ItemId: 4, Value: "10" },
    { ItemId: 5, Value: "10" },
    { ItemId: 6, Value: "10" },
    { ItemId: 7, Value: "10" },
    { ItemId: 8, Value: "10" },
    { ItemId: 9, Value: "10" },
    { ItemId: 10, Value: "" },
    { ItemId: 11, Value: "0" },
    { ItemId: 12, Value: "" },
    { ItemId: 13, Value: "" },
    { ItemId: 14, Value: "" },
    { ItemId: 15, Value: "0" },
    { ItemId: 16, Value: "false" },
    { ItemId: 17, Value: "false" },
    { ItemId: 18, Value: "" },
    { ItemId: 19, Value: "" },
    { ItemId: 20, Value: "0" },
    { ItemId: 21, Value: "" },
  ],
};

describe("Test ConvertFlow.test.ts", () => {
  test("Map object correctly", () => {
    expect(
      mapTaskTemplate1ToUpdateItem(input, UpdateType.Update)
    ).toMatchObject(output);
  });
});
