import { MapEntry } from "../../../../entities/MapEntry";
import { NamedMap } from "../../common/entities/NamedMap";
import { Config } from "../entities/Config";
import { convertToNamedMapArray } from "../../common/utils/namedMapConverter";


export function convert(input: Array<MapEntry<string>> | NamedMap | NamedMap[] | Config | Config[] | null): NamedMap[] {
    if (isConfig(input)) {
        return [{ name: input.name ? input.name : 'Config', mapData: input.configInfoData }];
    } else if (isConfigArray(input)) {
        return input.map<NamedMap>((config, index) => ({ name: config.name ? config.name : 'Config ' + index, mapData: config.configInfoData }));
    } else {
        return convertToNamedMapArray(input);
    }
}

function isConfig(data: Array<MapEntry<string>> | NamedMap | NamedMap[] | Config | Config[] | null): data is Config {
    return !!data && !Array.isArray(data) && 'configInfoData' in data;
}


function isConfigArray(data: Array<MapEntry<string>> | NamedMap | NamedMap[] | Config | Config[] | null): data is Config[] {
    return Array.isArray(data) && !!data.length && 'configInfoData' in data[0];
}

