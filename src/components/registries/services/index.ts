import { fetchMockData } from "./mockData";
import { commonAPI } from "../../../api/common"
import { RegistryCollection } from "../../../entities/RegistryCollection";
import { Target } from "../../../entities/Target";

const fetchData = (target: Target): Promise<RegistryCollection | null> => {
    return commonAPI.fetchData(target.url, fetchMockData);
}

export const registryService = {
    fetchData
}


