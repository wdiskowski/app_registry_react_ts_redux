import { ActionType } from '../../../../../constants/ActionType';
import { Target } from "../../../../../entities/Target";

export const fetchComparisonData = <T>(target: Target, registryUrl: string, fetchDataImpl: (t: Target, r: string)
  => Promise<T>, dispatch: any) => {
  fetchDataImpl(target, registryUrl)
    .then(registryData => {
      dispatch(fetchComparisonDataCompleted(registryData));
    });
};

const fetchComparisonDataCompleted = <T>(registryData: T) => ({
  type: ActionType.FETCH_COMPARISON_DATA_COMPLETED,
  payload: registryData,
});
