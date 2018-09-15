import { MapEntry } from '../entities/MapEntry';


export function mapGet<T>(map: Array<MapEntry<T>>, key: string): T | null {
    let value: T | null = null;
    for(const entry of map) {
        if(entry.key === key) {
            value = entry.value;
        }
    }
    return value;
}