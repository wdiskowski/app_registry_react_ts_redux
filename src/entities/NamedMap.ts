import { MapEntry } from './MapEntry';
import { NamedData } from './NamedData';

export interface NamedMap extends NamedData {
    data: Array<MapEntry<string>>
}