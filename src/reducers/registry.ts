import { ActionType } from '../constants/ActionType';
import { Registry } from '../entities/Registry';

export const registryReducer = (state: Registry, action: any) => {
  switch (action.type) {
    case ActionType.SELECT_REGISRY:
      return handleSelectRegistry(state, action.payload);
    case ActionType.FETCH_REGISTRY_DATA_COMPLETED:
      return handleFetchRegistryDataCompleted(state, action.payload);
  }
  return state ? state : null;
};

const handleSelectRegistry = (state: Registry, payload: number) => {
  const registry: Registry = { index: payload, data: [] }
  return registry;
};

const handleFetchRegistryDataCompleted = (state: Registry, payload: any[]) => {
  const registry: Registry = { index: state.index, data: payload }
  return registry;
};