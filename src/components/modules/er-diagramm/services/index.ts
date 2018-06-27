import { fetchMockData } from "./mockData";
import { commonAPI } from "../../../../api/common"
import { Target } from "../../../../entities/Target";
import { convert } from "../utils/erDiagrammConverter";
import { Diagramm } from "../entities/Diagramm";



const fetchData = (target: Target, registryUrl: string): Promise<Diagramm[]> => {
        return commonAPI.fetchData(target.url + registryUrl, fetchMockData)
            .then(diagrammData => convert(diagrammData));
}

export const services = {
    fetchData
}
