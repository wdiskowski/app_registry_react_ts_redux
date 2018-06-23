import { ActionType } from '../../../../constants/ActionType';
import { RegistryCollection } from "../../../../entities/RegistryCollection";
import { Release } from "../entities/Release";
import { Target } from "../../../../entities/Target";
import { services } from '../services';

export const fetchData = (target: Target, registries: RegistryCollection) => (dispatch: any) => {
  services.fetchData(target, registries)
    .then(releaseInfos => {
      dispatch(fetchDataCompleted(releaseInfos));
    });
};

const fetchDataCompleted = (releaseInfos: Release[]) => ({
  type: ActionType.FETCH_REGISTRY_DATA_COMPLETED,
  payload: releaseInfos,
});
