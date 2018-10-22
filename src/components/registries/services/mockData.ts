import { MapEntry } from "../../../entities/MapEntry";

const registriesDataAll: Array<MapEntry<string>> = [
    {
        key: 'Release Info', value: '/release-info'
    },
    {
        key: 'Config Info', value: '/config-info'
    },
    {
        key: 'Log Info', value: '/log-info'
    },
    {
        key: 'Interface Info', value: '/interface-info'
    },
    {
        key: 'Invocation Statistic', value: '/monitoring-info'
    },
    {
        key: 'ER Diagramm', value: '/er-diagramm'
    },
    {
        key: 'Class Diagramm', value: '/class-diagramm'
    }
];

const registriesDataPart: Array<MapEntry<string>> = [
    {
        key: 'Release Info', value: '/release-info'
    },
    {
        key: 'Config Info', value: '/config-info'
    },
    {
        key: 'Interface Info', value: '/interface-info'
    },
    {
        key: 'Invocation Statistic', value: '/monitoring-info'
    },
    {
        key: 'ER Diagramm', value: '/er-diagramm'
    }
];

export const fetchMockData = (url: string): Array<MapEntry<string>>  => {
    return url.indexOf("px092vm") > -1 ? registriesDataPart : registriesDataAll;
}
