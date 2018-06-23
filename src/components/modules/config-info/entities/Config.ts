import { MapEntry } from "../../common/entities/MapEntry";

/**
 * Deprecated use NamedMap instead
 */
export interface Config {
    name?: string,
    configInfoData: Array<MapEntry<string>>
}