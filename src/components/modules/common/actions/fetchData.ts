import { ActionType } from '../../../../constants/ActionType';
import { Target } from "../../../../entities/Target";

export const fetchData = <T>(target: Target, registryUrl: string, fetchDataImpl: (t: Target, r: string)
  => Promise<T>, dispatch: any, comparisonFlag?: boolean) => {
  fetchDataImpl(target, registryUrl)
    .then(registryData => {
      dispatch(comparisonFlag ? fetchComparisonDataCompleted(registryData) : fetchDataCompleted(registryData));
    });
};

const fetchDataCompleted = <T>(registryData: T) => ({
  type: ActionType.FETCH_REGISTRY_DATA_COMPLETED,
  payload: registryData,
});

const fetchComparisonDataCompleted = <T>(registryData: T) => ({
  type: ActionType.FETCH_COMPARISON_DATA_COMPLETED,
  payload: registryData,
});
