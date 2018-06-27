import { fetchMockData } from "./mockData";
import { commonAPI } from "../../../../api/common"
import { Target } from "../../../../entities/Target";
import { convert } from "../utils/invocationConverter";
import { NamedInvocationStatistic } from "../entities/NamedInvocationStatistic";



const fetchData = (target: Target, registryUrl: string): Promise<NamedInvocationStatistic[]> => {
        return commonAPI.fetchData(target.url + registryUrl, fetchMockData)
            .then(releaseData => convert(releaseData));
}

export const services = {
    fetchData
}
