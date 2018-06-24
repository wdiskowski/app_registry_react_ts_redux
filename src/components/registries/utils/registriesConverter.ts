import { MapEntry } from "../../../entities/MapEntry";
import { RegistryCollection } from "../../../entities/RegistryCollection";

export function convert(input: Array<MapEntry<string>> | RegistryCollection | null): Array<MapEntry<string>> {
    if (!input) {
        return [];
    } else if (Array.isArray(input)) {
        return input;
    } else {
        return convertRegistryCollectionToNamedMap(input);
    }
}

function convertRegistryCollectionToNamedMap(input: RegistryCollection): Array<MapEntry<string>> {
    const output: Array<MapEntry<string>> = [];
    output.push({ key: 'Release Info', value: input.releaseInfo });
    if (input.configInfo) { output.push({ key: 'Config Info', value: input.configInfo }) };
    if (input.logInfo) { output.push({ key: 'Log Info', value: input.logInfo }) };
    if (input.interfaceInfo) { output.push({ key: 'Interface Info', value: input.interfaceInfo }) };
    if (input.monitoringInfo) { output.push({ key: 'Invocation Statistic', value: input.monitoringInfo.slowest }) };
    if (input.erDiagramm) { output.push({ key: 'ER Diagramm', value: input.erDiagramm }) };
    if (input.classDiagramm) { output.push({ key: 'Class Diagramm', value: input.classDiagramm }) };
    return output;
}

