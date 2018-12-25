import { ActionType } from '../constants/ActionType';
import { Registry } from '../entities/Registry';
import { NamedData } from '../entities/NamedData';

export const registryReducer = (state: Registry<NamedData>, action: any) => {
  switch (action.type) {
    case ActionType.SELECT_REGISRY:
      return handleSelectRegistry(state, action.payload);
    case ActionType.FETCH_REGISTRY_DATA_COMPLETED:
      return handleFetchRegistryDataCompleted(state, action.payload);
    case ActionType.FETCH_COMPARISON_DATA_COMPLETED:
      return handleFetchComparisonDataCompleted(state, action.payload);
    case ActionType.CLEAR_COMPARISON_DATA:
      return handleClearComparisonData(state);
  }
  return state ? state : null;
};

const handleSelectRegistry = (state: Registry<NamedData>, payload: number) => {
  const registry: Registry<NamedData> = { index: payload, data: [] }
  return registry;
};

const handleFetchRegistryDataCompleted = (state: Registry<NamedData>, payload: NamedData[]) => {
  const registry: Registry<NamedData> = { index: state.index, data: payload }
  return registry;
};

const handleFetchComparisonDataCompleted = (state: Registry<NamedData>, payload: NamedData[]) => {
  const registry: Registry<NamedData> = { index: state.index, data: state.data, comparisonData: payload }
  return registry;
};

const handleClearComparisonData = (state: Registry<NamedData>) => {
  const registry: Registry<NamedData> = { index: state.index, data: state.data }
  return registry;
};