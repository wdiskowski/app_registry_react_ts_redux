import { MapEntry } from "./MapEntry";

export interface NamedMap {
    name?: string,
    mapData: Array<MapEntry<string>>
}