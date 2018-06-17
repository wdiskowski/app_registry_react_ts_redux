import { ActionType } from '../../../constants/ActionType';
import { Application } from "../../../entities/Application";

export const selectApp = (app: Application) => ({
  type: ActionType.SELECT_APP,
  payload: app,
});