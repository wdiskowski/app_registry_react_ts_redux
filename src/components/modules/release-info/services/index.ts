import { fetchMockData } from "./mockData";
import { commonAPI } from "../../../../api/common"
import { NamedMap } from "../../../../entities/NamedMap";
import { Target } from "../../../../entities/Target";
import { convert } from "../utils/releaseConverter";



const fetchData = (target: Target, registryUrl: string): Promise<NamedMap[]> => {
        return commonAPI.fetchData(target.url + registryUrl, fetchMockData)
            .then(releaseData => convert(releaseData));
}

export const services = {
    fetchData
}
