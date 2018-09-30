import { MapEntry } from "../../../entities/MapEntry";

const configProperties: Array<MapEntry<string>> = [
    {
        key: 'ping-interval-seconds', value: '10'
    },
    {
        key: 'sidebar-width', value: '160'
    }
];

export const fetchMockData = (url: string): Array<MapEntry<string>> => {
    return configProperties;
}

