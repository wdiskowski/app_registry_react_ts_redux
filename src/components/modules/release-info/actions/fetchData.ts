import { Target } from "../../../../entities/Target";
import { services } from '../services';
import {fetchData as fetchRegistryData } from '../../common/actions/fetchData';

export const fetchData = (target: Target, registryUrl: string) => (dispatch: any) => {
  fetchRegistryData(target, registryUrl,  (t: Target, r: string) => services.fetchData(t, r), dispatch)
};

