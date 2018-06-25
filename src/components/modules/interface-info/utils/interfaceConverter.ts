import { InterfaceData } from "../entities/InterfaceData";
import { NamedInterface } from "../entities/NamedInterface";


export function convert(input: InterfaceData[] | NamedInterface[] | null): NamedInterface[] {
    if (isInterfaceDataArray(input)) {
        return [{ name: 'Interfaces', interfaceInfoData: input }];
    } else if (isNamedInterfaceArray(input)) {
        return input;
    } else {
        return [];
    }
}

function isInterfaceDataArray(data: InterfaceData[] | NamedInterface[] | null): data is InterfaceData[] {
    return Array.isArray(data) && !!data.length && 'url' in data[0];
}

function isNamedInterfaceArray(data: NamedInterface[] | null): data is NamedInterface[] {
    return Array.isArray(data);
}

