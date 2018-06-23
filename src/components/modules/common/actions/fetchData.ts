import { ActionType } from '../../../../constants/ActionType';
import { RegistryCollection } from "../../../../entities/RegistryCollection";
import { Target } from "../../../../entities/Target";

export const fetchData = <T>(target: Target, registries: RegistryCollection, fetchDataImpl: (target: Target, registries: RegistryCollection) => Promise<T>, dispatch: any) => {
  fetchDataImpl(target, registries)
    .then(registryData => {
      dispatch(fetchDataCompleted(registryData));
    });
};

const fetchDataCompleted = <T>(registryData: T) => ({
  type: ActionType.FETCH_REGISTRY_DATA_COMPLETED,
  payload: registryData,
});
