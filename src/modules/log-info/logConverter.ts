import { MapEntry } from "../common/entities/MapEntry";
import { NamedMap } from "../common/entities/NamedMap";
import { Log } from "./entities/Log";


export function convert(input: Array<MapEntry<string>> | NamedMap | NamedMap[] | Log | Log[]): Array<MapEntry<string>> | NamedMap | NamedMap[] {
    if (isLog(input)) {
        return { name: input.name, entries: input.logInfoData };
    } else if (isLogArray(input)) {
        return input.map<NamedMap>(log => ({ name: log.name, entries: log.logInfoData }));
    } else {
        return input;
    }
}

function isLog(data: Array<MapEntry<string>> | NamedMap | NamedMap[] | Log | Log[]): data is Log {
    return !Array.isArray(data) && 'logInfoData' in data;
}


function isLogArray(data: Array<MapEntry<string>> | NamedMap | NamedMap[] | Log | Log[]): data is Log[] {
    return Array.isArray(data) && !!data.length && 'logInfoData' in data[0];
}

