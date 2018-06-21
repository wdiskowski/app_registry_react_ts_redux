import {Monitoring} from "./Monitoring";

export interface RegistryCollection {
    releaseInfo: string,
    configInfo?: string,
    erDiagramm?: string,
    classDiagramm?: string,
    interfaceInfo?: string,
    logInfo?: string,
    monitoringInfo?: Monitoring
}