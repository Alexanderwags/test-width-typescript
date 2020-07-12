import {
  Change,
  convertAttributeToField,
  SystemCategories,
  UpdateType,
} from "../../SystemCategories";
//import { TaskTemplate } from "./ConvertTaskTemplate";

export interface Lane {
  flowId?: number;
  description: string;
  enabled: boolean;
  id: number;
  name: string;
  order: number;
  tasks: any;
  type: number;
  maxActions: number;
}

export interface LaneExtended extends Lane {
  maxActions: number;
}

export enum LaneProperties {
  flowId = 0,
  description = 1,
  enabled = 2,
  id = 3,
  name = 4,
  order = 5,
  tasks = 6,
  type = 7,
  maxActions = 8,
}

export const createEmptyLane = (flowId: number): LaneExtended => ({
  flowId,
  description: "",
  enabled: true,
  id: 0,
  name: "",
  order: 0,
  tasks: [],
  type: 0,
  maxActions: 0,
});

export const LaneField = {
  flowId: LaneProperties.flowId,
  description: LaneProperties.description,
  enabled: LaneProperties.enabled,
  id: LaneProperties.id,
  name: LaneProperties.enabled,
  order: LaneProperties.order,
  tasks: LaneProperties.tasks,
  type: LaneProperties.type,
  maxActions: LaneProperties.maxActions,
};

export const mapLaneToUpdateItem = (
  lane: Lane,
  updateType: UpdateType = UpdateType.Update
): Change => {
  const { id } = lane;
  const attribs = Object.keys(lane);
  const allUpdates = attribs.reduce((updates, att) => {
    const field = convertAttributeToField(LaneField, att, lane[att]);
    if (field) {
      updates.push(field);
    }
    return updates;
  }, []);

  return {
    Category: SystemCategories.FlowLane,
    ObjectId: id,
    Type: updateType,
    Updates: allUpdates,
  };
};

export const mapLaneToLaneExtended = (lanes: Lane[]): LaneExtended[] =>
  lanes.map(
    (l: Lane): LaneExtended => {
      let maxActions = 0;
      l.tasks.forEach((t) => {
        let actionsNum = 0;
        if (t.type === 0) {
          actionsNum = t.userActions.length;
        } else if (t.type === 1) {
          actionsNum = t.action.results.length;
        }
        if (actionsNum > maxActions) {
          maxActions = actionsNum;
        }
      });
      return { ...l, maxActions };
    }
  );
