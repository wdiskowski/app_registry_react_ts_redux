import { ActionType } from '../../../constants/ActionType';
import { Target } from "../../../entities/Target";

export const selectAppTarget = (target: Target) => ({
  type: ActionType.SELECT_APP_TARGET,
  payload: target,
});