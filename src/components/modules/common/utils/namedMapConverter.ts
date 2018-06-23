import { MapEntry } from "../../common/entities/MapEntry";
import { NamedMap } from "../../common/entities/NamedMap";
import { convertToArray } from "../../../../utils/arrayConverter";

export const convertToNamedMapArray = (input: Array<MapEntry<string>> | NamedMap[] | NamedMap | null): NamedMap[] => {
    if (isSimpleMap(input)) {
        return [{name: 'Data', mapData: input}];
    } else {
        return convertToArray(input);
    }
}

function isSimpleMap(data: Array<MapEntry<string>> | NamedMap[] | NamedMap | null): data is Array<MapEntry<string>> {
    return Array.isArray(data) && !!data.length && 'key' in data[0];
}


