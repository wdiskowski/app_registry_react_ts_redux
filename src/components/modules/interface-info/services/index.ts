import { fetchMockData } from "./mockData";
import { commonAPI } from "../../../../api/common"
import { Target } from "../../../../entities/Target";
import { convert } from "../utils/interfaceConverter";
import { NamedInterface } from "../entities/NamedInterface";



const fetchData = (target: Target, registryUrl: string): Promise<NamedInterface[]> => {
        return commonAPI.fetchData(target.url + registryUrl, fetchMockData)
            .then(releaseData => convert(releaseData));
}

export const services = {
    fetchData
}
