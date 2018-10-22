import { fetchMockData } from "./mockData";
import { commonAPI } from "../../../api/common"
import { MapEntry } from "../../../entities/MapEntry";
import { Target } from "../../../entities/Target";

const fetchData = (target: Target): Promise<Array<MapEntry<string>>> => {
    return commonAPI.fetchData(target.url + '/registry', fetchMockData).then(releaseData => releaseData ? releaseData : []);
}

export const registryService = {
    fetchData
}


