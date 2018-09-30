import { fetchMockData } from "./mockData";
import { commonAPI } from "../../../api/common"
import { MapEntry } from "../../../entities/MapEntry";
import { Target } from "../../../entities/Target";
import { convert } from "../utils/registriesConverter";

const fetchData = (target: Target): Promise<Array<MapEntry<string>>> => {
    return commonAPI.fetchData(target.url + '/registry', fetchMockData).then(releaseData => convert(releaseData));
}

export const registryService = {
    fetchData
}


