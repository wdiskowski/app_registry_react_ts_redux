import { ActionType } from '../constants/ActionType';
import { RegistryCollection } from '../entities/RegistryCollection';

export const registriesReducer = (state: RegistryCollection | null, action: any) => {
  switch (action.type) {
    case ActionType.FETCH_REGISTIES_COMPLETED:
      return handleFetchRegistriesCompleted(state, action.payload);
  }
  return state ? state : null;
};

const handleFetchRegistriesCompleted = (state: RegistryCollection | null, payload: RegistryCollection) => {
  return payload;
};