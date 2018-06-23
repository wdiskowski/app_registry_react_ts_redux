import { RegistryCollection } from "../../../../entities/RegistryCollection";
import { Target } from "../../../../entities/Target";
import { services } from '../services';
import {fetchData as fetchRegistryData } from '../../common/actions/fetchData';

export const fetchData = (target: Target, registries: RegistryCollection) => (dispatch: any) => {
  fetchRegistryData(target, registries,  (t: Target, r: RegistryCollection) => services.fetchData(t, r), dispatch)
};