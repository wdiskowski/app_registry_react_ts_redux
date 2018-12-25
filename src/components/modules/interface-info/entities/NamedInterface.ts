import { InterfaceData } from "./InterfaceData";
import { NamedData } from "../../../../entities/NamedData";

export interface NamedInterface extends NamedData {
    interfaceInfoData: InterfaceData[]
}