import { fetchMockData } from "./mockData";
import { commonAPI } from "../../../../api/common"
import { NamedMap } from "../../../../entities/NamedMap";
import { Target } from "../../../../entities/Target";
import { convertToNamedMapArray } from "../../common/utils/namedMapConverter";



const fetchData = (target: Target, registryUrl: string): Promise<NamedMap[]> => {
        return commonAPI.fetchData(target.url + registryUrl, fetchMockData)
            .then(logData => convertToNamedMapArray(logData));
}

export const services = {
    fetchData
}
