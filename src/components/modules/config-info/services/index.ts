import { fetchMockData } from "./mockData";
import { commonAPI } from "../../../../api/common"
import { NamedMap } from "../../common/entities/NamedMap";
import { Target } from "../../../../entities/Target";
import { convert } from "../utils/configConverter";



const fetchData = (target: Target, registryUrl: string): Promise<NamedMap[]> => {
        return commonAPI.fetchData(target.url + registryUrl, fetchMockData)
            .then(configData => convert(configData));
}

export const services = {
    fetchData
}
