import { MapEntry } from '../../../../entities/MapEntry';
import { NamedData } from './NamedData';

export interface NamedMap extends NamedData {
    mapData: Array<MapEntry<string>>
}