import { MapEntry } from '../entities/MapEntry';
import { arrayFind } from './arrayUtils';


export function mapGet<T>(map: Array<MapEntry<T>>, key: string): T | null {
    const entryFound: MapEntry<T> | undefined = arrayFind(map, entry => entry.key === key);
    return entryFound ? entryFound.value : null;
}