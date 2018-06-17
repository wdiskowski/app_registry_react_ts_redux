
export interface RegistryCollection {
    releaseInfo: string,
    configInfo?: string,
    erDiagramm?: string,
    classDiagramm?: string,
    interfaceInfo?: string,
    logInfo?: string,
    monitoringInfo?: {
        slowest: string,
        exceptional: string
    }
}