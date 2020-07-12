import { mapGlobalRoleToUpdateItem } from "./ConvertGlobalRoles";
import { UpdateType } from "../../SystemCategories";

const input = {
  id: 0,
  name: "",
  description: "",
  roleType: 0,
  roles: {},
};

const output = {
  Category: 2002,
  ObjectId: 0,
  Type: 1,
  Updates: [
    { ItemId: 0, Value: "0" },
    { ItemId: 1, Value: "" },
    { ItemId: 2, Value: "" },
    { ItemId: 3, Value: "0" },
    { ItemId: 4, Value: {} },
  ],
};

describe("Test ConvertGlobalRoles", () => {
  test("Map object correctly", () => {
    expect(
      mapGlobalRoleToUpdateItem(input, UpdateType.Update, "")
    ).toMatchObject(output);
  });
});
