import { ActionType } from '../constants/ActionType';
import { MapEntry } from '../entities/MapEntry';

export const registriesReducer = (state: Array<MapEntry<string>>, action: any) => {
  switch (action.type) {
    case ActionType.FETCH_REGISTIES_COMPLETED:
      return handleFetchRegistriesCompleted(state, action.payload);
    case ActionType.CLEAR_REGISTIES:
      return handleClearRegistries(state, action.payload);
  }
  return state ? state : [];
};

const handleFetchRegistriesCompleted = (state: Array<MapEntry<string>>, payload: Array<MapEntry<string>>) => {
  return payload;
};

const handleClearRegistries = (state: Array<MapEntry<string>>, payload: Array<MapEntry<string>>) => {
  return [];
};