import { RegistryCollection } from "../../../entities/RegistryCollection";
import { MapEntry } from "../../../entities/MapEntry";

const registriesDataAll: RegistryCollection =

    {
        releaseInfo: "/release-info",
        configInfo: "/config-info",
        erDiagramm: "/er-diagramm",
        classDiagramm: "/class-diagramm",
        interfaceInfo: "/interface-info",
        logInfo: "/log-info",
        monitoringInfo: {
            slowest: "/monitoring-info/slowest",
            exceptional: "/monitoring-info/exceptional"
        }
    };
const registriesDataAll2: Array<MapEntry<string>> = [
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

const registriesDataPart: RegistryCollection =
    {
        releaseInfo: "/release-info",
        configInfo: "/config-info",
        erDiagramm: "/er-diagramm",
        interfaceInfo: "/interface-info",
        monitoringInfo: {
            slowest: "/monitoring-info/slowest",
            exceptional: "/monitoring-info/exceptional"
        }
    };

export const fetchMockData = (url: string): Array<MapEntry<string>> | RegistryCollection => {
    return url.indexOf("px092vm") > -1 ? registriesDataPart :
        url.indexOf("tx092vm") > -1 ? registriesDataAll2 : registriesDataAll;
}
