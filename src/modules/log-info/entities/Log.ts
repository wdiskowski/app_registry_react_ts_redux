import { MapEntry } from "../../common/entities/MapEntry";

export interface Log {
    name?: string,
    logInfoData: Array<MapEntry<string>>
}