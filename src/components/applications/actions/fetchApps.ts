import { ActionType } from '../../../constants/ActionType';
import { Application } from "../../../entities/Application";
import { applicationService } from '../services';

export const fetchApps = () => (dispatch: any) => {
  applicationService.fetchData()
    .then(apps => {
      dispatch(fetchAppsCompleted(apps));
    });
};

const fetchAppsCompleted = (apps: Application[]) => ({
  type: ActionType.FETCH_APPS_COMPLETED,
  payload: apps,
});
