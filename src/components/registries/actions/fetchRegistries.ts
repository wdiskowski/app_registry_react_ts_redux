import { ActionType } from '../../../constants/ActionType';
import { MapEntry } from "../../../entities/MapEntry";
import { Target } from "../../../entities/Target";
import { registryService } from '../services';

export const fetchRegistries = (target: Target) => (dispatch: any) => {
  registryService.fetchData(target)
    .then(registries => {
      dispatch(fetchRegistriesCompleted(registries));
    });
};

const fetchRegistriesCompleted = (registries: Array<MapEntry<string>>) => ({
  type: ActionType.FETCH_REGISTIES_COMPLETED,
  payload: registries,
});
