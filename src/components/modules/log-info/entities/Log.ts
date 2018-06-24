import { MapEntry } from "../../../../entities/MapEntry";

/**
 * Deprecated use NamedMap instead
 */
export interface Log {
    name?: string,
    logInfoData: Array<MapEntry<string>>
}