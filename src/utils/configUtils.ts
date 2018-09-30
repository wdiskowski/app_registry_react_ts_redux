import { mapGet } from './mapUtils';
import { MapEntry } from '../entities/MapEntry';

const DEFAULT_PING_INTERVAL_SECONDS: number = 0;

const DEFAULT_SIDEBAR_WIDTH: number = 160;

export function getPingIntervalSeconds(config: Array<MapEntry<string>>): number {
    const entryFound: string | null = mapGet(config, 'ping-interval-seconds');
    return entryFound ? parseInt(entryFound, 10) : DEFAULT_PING_INTERVAL_SECONDS;
}

export function getSidebarWidth(config: Array<MapEntry<string>>): number {
    const entryFound: string | null = mapGet(config, 'sidebar-width');
    return entryFound ? parseInt(entryFound, 10) : DEFAULT_SIDEBAR_WIDTH;
}