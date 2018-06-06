import { fetchLogInfoMock } from "./logInfoMock";
import { convert } from "./logConverter";
import { fetchData } from "../../services/fetch/fetchService"
import { MapEntry } from "../common/entities/MapEntry";
import { NamedMap } from "../common/entities/NamedMap";

export function findLogInfoData(url: string, onSuccess: (json: Array<MapEntry<string>> | NamedMap | NamedMap[]) => void) {
    fetchData(url, data => onSuccess(convert(data)), fetchLogInfoMock)
}





