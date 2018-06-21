import { ActionType } from '../../../constants/ActionType';

export const selectRegistry = (selectedIndex: number) => ({
  type: ActionType.SELECT_REGISRY,
  payload: selectedIndex
});