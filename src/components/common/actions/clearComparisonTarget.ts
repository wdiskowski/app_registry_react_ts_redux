import { ActionType } from '../../../constants/ActionType';

export const clearComparisonTarget = () => ({
  type: ActionType.CLEAR_COMPARISON_TARGET,
  payload: null
});