import { fetchMockData } from "./mockData";
import { commonAPI } from "../../../../api/common"
import { RegistryCollection } from "../../../../entities/RegistryCollection";
import { Release } from "../entities/Release";
import { Target } from "../../../../entities/Target";
import { convertToArray } from "../../../../utils/arrayConverter";



const fetchData = (target: Target, registries: RegistryCollection): Promise<Release[]> => {
        return commonAPI.fetchData(target.url + registries.releaseInfo, fetchMockData)
            .then(releaseData => convertToArray(releaseData));
}

export const services = {
    fetchData
}
