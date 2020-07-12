import { mapTaskUserToUpdateItem } from "./ConvertTaskUser";
import { UpdateType } from "../../SystemCategories";

const input = {
  id: 17,
  templateId: 17,
  uniqueGuid: "guia",
  userType: "guia 17",
  uniqueId: 17,
};

const output = {
  Category: 6002,
  ObjectId: 17,
  Type: 1,
  Updates: [
    { ItemId: 0, Value: "17" },
    { ItemId: 1, Value: "17" },
    { ItemId: 2, Value: "guia" },
    { ItemId: 3, Value: "guia 17" },
    { ItemId: 4, Value: "17" },
  ],
};

describe("Test ConvertFlow.test.ts", () => {
  test("Map object correctly", () => {
    expect(mapTaskUserToUpdateItem(input, UpdateType.Update)).toMatchObject(
      output
    );
  });
});
