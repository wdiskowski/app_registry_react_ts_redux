import { fetchErDiagrammMock } from "./erDiagrammMock";
import { fetchData } from "../../services/fetch/fetchService"
import { Diagramm } from "./entities/Diagramm";


export function findErDiagrammData(url: string, onSuccess: (json: Diagramm[]) => void) {
    fetchData(url, data => onSuccess(data), fetchErDiagrammMock)
}





