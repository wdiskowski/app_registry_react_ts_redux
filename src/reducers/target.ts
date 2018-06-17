import { ActionType } from '../constants/ActionType';
import { Target } from '../entities/Target';

export const targetReducer = (state: Target, action: any) => {
  switch (action.type) {
    case ActionType.SELECT_APP_TARGET:
      return handleSelectAppTarget(state, action.payload);
  }
  return state ? state : null;
};

const handleSelectAppTarget = (state: Target, payload: Target) => {
  return payload;
};