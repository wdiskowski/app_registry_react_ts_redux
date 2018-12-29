import { Target } from "../../../../entities/Target";
import { services } from '../services';
import {fetchData as fetchRegistryData } from '../../common/actions/fetchData';
import {fetchComparisonData as fetchRegistryComparisonData} from '../../common/data-comparison/actions/fetchComparisonData';

export const fetchData = (target: Target, registryUrl: string) => (dispatch: any) => {
  fetchRegistryData(target, registryUrl,  (t: Target, r: string) => services.fetchData(t, r), dispatch)
};

export const fetchComparisonData = (target: Target, registryUrl: string) => (dispatch: any) => {
  fetchRegistryComparisonData(target, registryUrl,  (t: Target, r: string) => services.fetchData(t, r), dispatch)
};