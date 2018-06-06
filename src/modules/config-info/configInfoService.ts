import { fetchConfigInfoMock } from "./configInfoMock";
import { convert } from "./configConverter";
import { fetchData } from "../../services/fetch/fetchService"
import { MapEntry } from "../common/entities/MapEntry";
import { NamedMap } from "../common/entities/NamedMap";

export function findConfigInfoData(url: string, onSuccess: (json: Array<MapEntry<string>> | NamedMap | NamedMap[]) => void) {
    fetchData(url, data => onSuccess(convert(data)), fetchConfigInfoMock)
}





