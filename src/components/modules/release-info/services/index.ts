import { fetchMockData } from "./mockData";
import { commonAPI } from "../../../../api/common"
import { RegistryCollection } from "../../../../entities/RegistryCollection";
import { NamedMap } from "../../common/entities/NamedMap";
import { Target } from "../../../../entities/Target";
import { convert } from "../utils/releaseConverter";



const fetchData = (target: Target, registries: RegistryCollection): Promise<NamedMap[]> => {
        return commonAPI.fetchData(target.url + registries.releaseInfo, fetchMockData)
            .then(releaseData => convert(releaseData));
}

export const services = {
    fetchData
}
