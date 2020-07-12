import {
  mapCertificationTemplateToUpdateItem,
  CertificationType,
  CertificationCriteriaType,
} from "./ConvertCertificationTemplate";
import { UpdateType } from "../../SystemCategories";

const input = {
  id: 0,
  templateId: 0,
  documentTypeId: 0,
  type: CertificationCriteriaType.ViewedAll,
  value: "",
  decimal: 0,
  date: "",
  failedLevel: CertificationType.None,
  enabled: true,
};

const output = {
  Category: 6006,
  ObjectId: 0,
  Type: 1,
  Updates: [
    { ItemId: 0, Value: "0" },
    { ItemId: 1, Value: "0" },
    { ItemId: 2, Value: "0" },
    { ItemId: 3, Value: "0" },
    { ItemId: 4, Value: "" },
    { ItemId: 5, Value: "0" },
    { ItemId: 6, Value: "" },
    { ItemId: 7, Value: "0" },
    { ItemId: 8, Value: "true" },
  ],
};

describe("Test ConvertCertificationTemplate", () => {
  test("Map object correctly", () => {
    expect(
      mapCertificationTemplateToUpdateItem(input, UpdateType.Update)
    ).toMatchObject(output);
  });
});
