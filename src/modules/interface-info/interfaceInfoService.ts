import { fetchInterfaceInfoMock } from "./interfaceInfoMock";
import { fetchData } from "../../services/fetch/fetchService"
import { InterfaceData } from "./entities/InerfaceData";
import { NamedInterface } from "./entities/NamedInterface";

export function findInterfaceInfoData(url: string, onSuccess: (json: InterfaceData[] | NamedInterface[]) => void) {
    fetchData(url, onSuccess, fetchInterfaceInfoMock)
}





