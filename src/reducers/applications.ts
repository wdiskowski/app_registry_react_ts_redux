import { ActionType } from '../constants/ActionType';
import { Application } from '../entities/Application';

export const applicationsReducer = (state: Application[] = [], action: any) => {
  switch (action.type) {
    case ActionType.FETCH_APPS_COMPLETED:
      return handleFetchAppsCompleted(state, action.payload);
  }
  return state;
};

const handleFetchAppsCompleted = (state: Application[], payload: Application[]) => {
  return payload;
};