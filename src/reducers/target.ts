import { ActionType } from '../constants/ActionType';
import { Target } from '../entities/Target';

export const targetReducer = (state: Target, action: any) => {
  switch (action.type) {
    case ActionType.SELECT_APP_TARGET:
      return handleSelectAppTarget(state, action.payload);
  }
  return state ? state : null;
};

export const comparisonTargetReducer = (state: Target, action: any) => {
  switch (action.type) {
    case ActionType.SELECT_COMPARISON_TARGET:
      return handleSelectAppTarget(state, action.payload);
    case ActionType.CLEAR_COMPARISON_TARGET:
      return null;
  }
  return state ? state : null;
};

const handleSelectAppTarget = (state: Target, payload: Target) => {
  return payload;
};

