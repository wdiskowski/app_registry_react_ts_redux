import dateformat from 'dateformat';
import { MapEntry } from "../../../../entities/MapEntry";
import { NamedMap } from "../../common/entities/NamedMap";
import { Release } from "../entities/Release";
import { convertToNamedMapArray } from "../../common/utils/namedMapConverter";


export function convert(input: Array<MapEntry<string>> | NamedMap | NamedMap[] | Release | Release[] | null): NamedMap[] {
    if (isRelease(input)) {
        return [convertReleaseToNamedMap(input)];
    } else if (isReleaseArray(input)) {
        return input.map<NamedMap>(release => convertReleaseToNamedMap(release));
    } else {
        return convertToNamedMapArray(input);
    }
}

function isRelease(data: Array<MapEntry<string>> | NamedMap | NamedMap[] | Release | Release[] | null): data is Release {
    return !!data && !Array.isArray(data) && 'projekt' in data;
}


function isReleaseArray(data: Array<MapEntry<string>> | NamedMap | NamedMap[] | Release | Release[] | null): data is Release[] {
    return Array.isArray(data) && !!data.length && 'projekt' in data[0];
}

function convertReleaseToNamedMap(release: Release): NamedMap {
    return {
        name: release.projekt,
        mapData: [
            {
                key: 'projekt',
                value: release.projekt
            },
            {
                key: 'version',
                value: release.version
            },
            {
                key: 'buildDate',
                value: dateformat(release.buildDate, 'dd.mm.yyyy hh:MM:ss')
            }
        ]
    }

}

