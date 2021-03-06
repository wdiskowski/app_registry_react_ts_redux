import { sort } from '../../../utils/PropertySorter';
import { fetchMockData } from "./mockData";
import { commonAPI } from "../../../api/common"
import { Application } from "../../../entities/Application";



const APPLICATIONS_API_URL: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + "/ApplicationsRegistryWeb/rest/registry";

let applicationsCached: Application[] = [];

const fetchData = (): Promise<Application[]> => {
    if (applicationsCached && applicationsCached.length) {
        return Promise.resolve(applicationsCached);
    } else {
        return commonAPI.fetchData(APPLICATIONS_API_URL, fetchMockData).then(app => applicationsCached = sort(app, 'name'));
    }
}

export const applicationService = {
    fetchData
}
