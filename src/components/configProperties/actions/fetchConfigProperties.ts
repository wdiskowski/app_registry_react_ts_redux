import { ActionType } from '../../../constants/ActionType';
import { MapEntry } from "../../../entities/MapEntry";
import { configPropertiesService } from '../services';

export const fetchConfigProperties = () => (dispatch: any) => {
  configPropertiesService.fetchData()
    .then(configProperties => {
      dispatch(fetchConfigCompleted(configProperties));
    });
};

const fetchConfigCompleted = (configProperties: Array<MapEntry<string>>) => ({
  type: ActionType.FETCH_CONFIG_PROPERTIES_COMPLETED,
  payload: configProperties,
});
