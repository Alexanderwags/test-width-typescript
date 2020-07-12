import { mapDocTypeToUpdateItem } from "./ConvertDocTypes";
import { UpdateType } from "../../SystemCategories";

const input = {
  id: 0,
  name: "",
  description: "",
  logoId: 0,
  defaultLocationId: 0,
  encrypted: "",
  convert: "",
  protect: "",
  revisions: "",
  archiveDay: 0,
  archiveMonth: 0,
  archiveYear: 0,
  destructionDay: 0,
  destructionMonth: 0,
  destructionYear: 0,
  security: "",
  ocr: "",
  trackViews: [],
  initial: [],
};

const output = {
  Category: 4000,
  ObjectId: 0,
  Type: 1,
  Updates: [
    { ItemId: 0, Value: "0" },
    { ItemId: 1, Value: "" },
    { ItemId: 2, Value: "" },
    { ItemId: 3, Value: "0" },
    { ItemId: 4, Value: "0" },
    { ItemId: 5, Value: "" },
    { ItemId: 6, Value: "" },
    { ItemId: 7, Value: "" },
    { ItemId: 8, Value: "" },
    { ItemId: 9, Value: "0" },
    { ItemId: 10, Value: "0" },
    { ItemId: 11, Value: "0" },
    { ItemId: 12, Value: "0" },
    { ItemId: 13, Value: "0" },
    { ItemId: 14, Value: "0" },
    { ItemId: 15, Value: "" },
    { ItemId: 16, Value: "" },
    { ItemId: 17, Value: "" },
    { ItemId: 18, Value: "" },
  ],
};

describe("Test ConvertDocTypes", () => {
  test("Map object correctly", () => {
    expect(mapDocTypeToUpdateItem(input, UpdateType.Update)).toMatchObject(
      output
    );
  });
});
