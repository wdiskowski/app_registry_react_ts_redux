import { MapEntry } from '../../../../entities/MapEntry';

export interface NamedMap {
    name?: string,
    mapData: Array<MapEntry<string>>
}