import { MapEntry } from "../../common/entities/MapEntry";

export interface Config {
    name?: string,
    configInfoData: Array<MapEntry<string>>
}