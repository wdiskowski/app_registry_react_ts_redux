import { MapEntry } from "../../../../entities/MapEntry";

/**
 * Deprecated use NamedMap instead
 */
export interface Config {
    name?: string,
    configInfoData: Array<MapEntry<string>>
}