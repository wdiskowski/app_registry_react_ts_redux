import { ActionType } from '../../../constants/ActionType';
import { RegistryCollection } from "../../../entities/RegistryCollection";
import { Target } from "../../../entities/Target";
import { registryService } from '../services';

export const fetchRegistries = (target: Target) => (dispatch: any) => {
  registryService.fetchData(target)
    .then(registries => {
      dispatch(fetchRegistriesCompleted(registries));
    });
};

const fetchRegistriesCompleted = (registries: RegistryCollection | null) => ({
  type: ActionType.FETCH_REGISTIES_COMPLETED,
  payload: registries,
});
