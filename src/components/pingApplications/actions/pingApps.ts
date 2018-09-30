import { ActionType } from '../../../constants/ActionType';
import { Application } from "../../../entities/Application";
import { Target } from "../../../entities/Target";

export const pingApps = (apps: Application[], dispatch: any) => {
  const unreachableTargets: Target[] = new Array();
  const pingResults: Array<Promise<any>> = new Array();
  apps.forEach(app => {
    app.targets.forEach(targ => {
      if (process.env.NODE_ENV !== "production") {
        if (Math.random() > 0.7) {
          pingResults.push(
            new Promise(
              (resolve, reject) =>
                reject(unreachableTargets.push(targ))
            )
          );
        }
      } else {
        pingResults.push(
          fetch(targ.url).catch(() =>
            unreachableTargets.push(targ)
          )
        );
      }
    });
  });
  Promise.all(pingResults).then(() =>
    dispatch(pingAppsCompleted(unreachableTargets))
  ).catch(() =>
    dispatch(pingAppsCompleted(unreachableTargets)));
};

const pingAppsCompleted = (unreachableTargets: Target[]) => ({
  type: ActionType.PING_APPS_COMPLETED,
  payload: unreachableTargets,
});
