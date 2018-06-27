import { Diagramm } from "../entities/Diagramm";

export function convert(input: Diagramm[] | null): Diagramm[] {
    if (isDiagrammArray(input)) {
        return input;
    } else {
        return [];
    }
}

function isDiagrammArray(data: Diagramm[] | null): data is Diagramm[] {
    return Array.isArray(data);
}

