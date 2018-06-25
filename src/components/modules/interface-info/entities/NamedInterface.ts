import { InterfaceData } from "./InterfaceData";
import { NamedData } from "../../common/entities/NamedData";

export interface NamedInterface extends NamedData {
    interfaceInfoData: InterfaceData[]
}