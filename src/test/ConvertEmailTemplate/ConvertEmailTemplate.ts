import {
  Change,
  convertAttributeToField,
  SystemCategories,
  UpdateType,
} from "../../SystemCategories";

export const createEmptyEmailTemplate = () => ({
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
});

export interface EmailTemplate {
  id: number;
  name: string;
  subject: string;
  body: string;
  fromName: string;
  fromAddress: string;
  linkDocuments: boolean;
  event: string;
  delay: string;
  options: string;
}

export const EmailTemplateTypes = {
  Nudge: "Nudge",
  Task: "Task",
  Note: "Note",
  NoteReply: "Note Reply",
  NoteApproval: "Note Approval",
  Alarm: "Alarm",
  Default: "Default",
  Reset: "Reset",
  PasswordReset: "Password Reset",
  External: "External",
  NoteMention: "Note Mention",
  Custom: "Custom",
  TicketCreation: "Ticket Creation",
  TicketReply: "Ticket Reply",
  PackCompletion: "Pack Completion",
  Export: "Export",
  System: "System",
  TaskSummary: "Task Summary",
  Watch: "Watch",
};
export enum AssistAdminElements {
  id = 0,
  name = 1,
  subject = 2,
  body = 3,
  fromName = 4,
  fromAddress = 5,
  linkDocuments = 6,
  event = 7,
  delay = 8,
  options = 9,
}
export const EmailTemplateField = {
  id: AssistAdminElements.id,
  name: AssistAdminElements.name,
  subject: AssistAdminElements.subject,
  body: AssistAdminElements.body,
  fromName: AssistAdminElements.fromName,
  fromAddress: AssistAdminElements.fromAddress,
  linkDocuments: AssistAdminElements.linkDocuments,
  event: AssistAdminElements.event,
  delay: AssistAdminElements.delay,
  options: AssistAdminElements.options,
};

export const mapEmailTemplateToUpdateItem = (
  aging: EmailTemplate,
  updateType: UpdateType = UpdateType.Update
): Change => {
  const { id } = aging;
  const attribs = Object.keys(aging);
  const allUpdates = attribs.reduce((updates, att) => {
    const field = convertAttributeToField(EmailTemplateField, att, aging[att]);
    if (field) {
      updates.push(field);
    }
    return updates;
  }, []);

  return {
    Category: SystemCategories.Assists,
    ObjectId: id,
    Type: updateType,
    Updates: allUpdates,
  };
};
