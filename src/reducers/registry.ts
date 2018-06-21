import { ActionType } from '../constants/ActionType';

export const registryReducer = (state: number = 0, action: any) => {
  switch (action.type) {
    case ActionType.SELECT_REGISRY:
      return handleSelectRegistry(state, action.payload);
  }
  return state;
};

const handleSelectRegistry = (state: number, payload: number) => {
  return payload;
};