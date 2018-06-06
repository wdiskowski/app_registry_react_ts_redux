import { MapEntry } from "../common/entities/MapEntry";
import { NamedMap } from "../common/entities/NamedMap";
import { Config } from "./entities/Config";


export function convert(input: Array<MapEntry<string>> | NamedMap | NamedMap[] | Config | Config[]): Array<MapEntry<string>> | NamedMap | NamedMap[] {
    if (isConfig(input)) {
        return { name: input.name, entries: input.configInfoData };
    } else if (isConfigArray(input)) {
        return input.map<NamedMap>(config => ({ name: config.name, entries: config.configInfoData }));
    } else {
        return input;
    }
}

function isConfig(data: Array<MapEntry<string>> | NamedMap | NamedMap[] | Config | Config[]): data is Config {
    return !Array.isArray(data) && 'configInfoData' in data;
}


function isConfigArray(data: Array<MapEntry<string>> | NamedMap | NamedMap[] | Config | Config[]): data is Config[] {
    return Array.isArray(data) && !!data.length && 'configInfoData' in data[0];
}

