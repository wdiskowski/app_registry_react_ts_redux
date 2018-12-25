import { ActionType } from '../../../../constants/ActionType';

export const clearComparisonData = () => ({
  type: ActionType.CLEAR_COMPARISON_DATA,
  payload: null
});