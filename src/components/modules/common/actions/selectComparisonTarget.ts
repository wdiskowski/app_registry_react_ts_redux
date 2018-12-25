import { ActionType } from '../../../../constants/ActionType';
import { Target } from "../../../../entities/Target";

export const selectComparisonTarget = (target: Target) => ({
  type: ActionType.SELECT_COMPARISON_TARGET,
  payload: target
});