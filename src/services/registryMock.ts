import { RegistryCollection } from "../entities/RegistryCollection";

const registryDataAll: RegistryCollection =

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

const registryDataPart: RegistryCollection =
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

export function findRegistryDataMock(url: string): RegistryCollection {
    return url.indexOf("px092vm") > -1 ? registryDataPart : registryDataAll;
}

