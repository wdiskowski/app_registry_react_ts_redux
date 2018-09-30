import { fetchMockData } from "./mockData";
import { commonAPI } from "../../../api/common"
import { MapEntry } from "../../../entities/MapEntry";

const CONFIG_PROPERTIES_API_URL: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + "/ApplicationsRegistryWeb/rest/config";


const fetchData = (): Promise<Array<MapEntry<string>>> => {
    return commonAPI.fetchData(CONFIG_PROPERTIES_API_URL, fetchMockData);
}

export const configPropertiesService = {
    fetchData
}
