import { MapEntry } from "../../../../entities/MapEntry";
import { NamedMap } from "../../../../entities/NamedMap";
import { mapGet } from "../../../../utils/mapUtils";
import { sort } from "../../../../utils/PropertySorter";

export const mergeMaps = (firstMap: NamedMap | null, secondMap: NamedMap | null): Array<MapEntry<Array<string | null>>> => {
    if (!firstMap) {
        return [];
    } else {
        const mergedMap: Array<MapEntry<Array<string | null>>> = [];
        firstMap.data.map(entry => mergedMap.push({ key: entry.key, value: [entry.value, secondMap ? mapGet(secondMap.data, entry.key) : null] }));
        if (secondMap) {
            secondMap.data.map(entry => {
                const firstValue = mapGet(firstMap.data, entry.key);
                if (firstValue === null) {
                    mergedMap.push({ key: entry.key, value: [null, entry.value] })
                }
            })
        }
        return sort(mergedMap, "key");
    }
}
