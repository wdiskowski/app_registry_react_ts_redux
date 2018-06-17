import { ActionType } from '../constants/ActionType';
import { Application } from '../entities/Application';

export const applicationReducer = (state: Application, action: any) => {
  switch (action.type) {
    case ActionType.SELECT_APP:
      return handleSelectApp(state, action.payload);
  }
  return state ? state : null;
};

const handleSelectApp = (state: Application, payload: Application) => {
  return payload;
};