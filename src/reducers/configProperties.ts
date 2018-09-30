import { ActionType } from '../constants/ActionType';
import { MapEntry } from '../entities/MapEntry';

export const configPropertiesReducer = (state: Array<MapEntry<string>>, action: any) => {
  switch (action.type) {
    case ActionType.FETCH_CONFIG_PROPERTIES_COMPLETED:
      return handleFetchConfigCompleted(state, action.payload);
  }
  return state ? state : [];
};

const handleFetchConfigCompleted = (state: Array<MapEntry<string>>, payload: Array<MapEntry<string>>) => {
  return payload;
};
