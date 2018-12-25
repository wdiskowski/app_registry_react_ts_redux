import { MapEntry } from "../../../../entities/MapEntry";
import { NamedMap } from "../../../../entities/NamedMap";
import { Log } from "../entities/Log";
import { convertToNamedMapArray } from "../../common/utils/namedMapConverter";


export function convert(input: Array<MapEntry<string>> | NamedMap | NamedMap[] | Log | Log[] | null): NamedMap[] {
    if (isLog(input)) {
        return [{ name: input.name ? input.name : 'Log', data: input.logInfoData }];
    } else if (isLogArray(input)) {
        return input.map<NamedMap>((log, index) => ({ name: log.name ? log.name : 'Log ' + index, data: log.logInfoData }));
    } else {
        return convertToNamedMapArray(input);
    }
}

function isLog(data: Array<MapEntry<string>> | NamedMap | NamedMap[] | Log | Log[] | null): data is Log {
    return !!data && !Array.isArray(data) && 'logInfoData' in data;
}


function isLogArray(data: Array<MapEntry<string>> | NamedMap | NamedMap[] | Log | Log[] | null): data is Log[] {
    return Array.isArray(data) && !!data.length && 'logInfoData' in data[0];
}

