import { fetchClassDiagrammMock } from "./classDiagrammMock";
import { fetchData } from "../../services/fetch/fetchService"
import { Diagramm } from "./entities/Diagramm";


export function findClassDiagrammData(url: string, onSuccess: (json: Diagramm[]) => void) {
    fetchData(url, data => onSuccess(data), fetchClassDiagrammMock)
}





