import { ActionType } from '../constants/ActionType';
import { Application } from '../entities/Application';
import { Target } from '../entities/Target';
import { arrayFind } from '../utils/arrayUtils';

export const applicationsReducer = (state: Application[] = [], action: any) => {
  switch (action.type) {
    case ActionType.FETCH_APPS_COMPLETED:
      return handleFetchAppsCompleted(state, action.payload);
    case ActionType.PING_APPS_COMPLETED:
      return handlePingAppsCompleted(state, action.payload);
  }
  return state;
};

const handleFetchAppsCompleted = (state: Application[], payload: Application[]) => {
  return payload;
};

const handlePingAppsCompleted = (state: Application[], unreachableTargets: Target[]) => {
  return state.map(a =>
    ({
      ...a, targets: a.targets.map(t => {
        return arrayFind(unreachableTargets,
          unreachableTarget =>
            a.name === unreachableTarget.applicationName && t.name === unreachableTarget.name)
          ? { ...t, offline: true } : { ...t, offline: false };
      })
    }));
};
