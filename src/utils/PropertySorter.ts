import { compareTo } from './PropertyComparator';

export function sort(data: any[], property: string): any[] {
    return data ? data.sort((a, b) => compareTo(a, b, property)) : [];
}