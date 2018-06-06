import { MapEntry } from "./MapEntry";

export interface NamedMap {
    name?: string,
    entries: Array<MapEntry<string>>
}