import { mapEmailTemplateToUpdateItem } from "./ConvertEmailTemplate";
import { UpdateType } from "../../SystemCategories";

const input = {
  id: 0,
  name: "",
  subject: "",
  body: "",
  fromName: "",
  fromAddress: "",
  linkDocuments: false,
  event: "",
  delay: "",
  options: "",
};

const output = {
  Category: 9000,
  ObjectId: 0,
  Type: 1,
  Updates: [
    { ItemId: 0, Value: "0" },
    { ItemId: 1, Value: "" },
    { ItemId: 2, Value: "" },
    { ItemId: 3, Value: "" },
    { ItemId: 4, Value: "" },
    { ItemId: 5, Value: "" },
    { ItemId: 6, Value: "false" },
    { ItemId: 7, Value: "" },
    { ItemId: 8, Value: "" },
    { ItemId: 9, Value: "" },
  ],
};

describe("Test ConvertAgingDetails", () => {
  test("Map object correctly", () => {
    expect(
      mapEmailTemplateToUpdateItem(input, UpdateType.Update)
    ).toMatchObject(output);
  });
});
