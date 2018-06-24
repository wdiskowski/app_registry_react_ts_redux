import { MapEntry } from '../entities/MapEntry';


export function mapGet<T>(map: Array<MapEntry<T>>, key: string): T | null {
    const entryFound: MapEntry<T> | undefined = map.find( entry => entry.key === key );
    return entryFound ? entryFound.value : null;
}