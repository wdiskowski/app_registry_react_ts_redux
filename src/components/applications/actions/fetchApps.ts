import { ActionType } from '../../../constants/ActionType';
import { Application } from "../../../entities/Application";
import { applicationService } from '../services';

export const fetchApps = () => (dispatch: any) => {
  applicationService.fetchData()
    .then(apps => {
      dispatch(fetchAppsCompleted(apps));
    });
};

const fetchAppsCompleted = (apps: Application[]) => {
  apps.forEach(a => a.targets.forEach(t => t.applicationName = a.name));
  return ({
    type: ActionType.FETCH_APPS_COMPLETED,
    payload: apps,
  });
};
