import { ClassData } from "./ClassData";
import { Relation } from "./Relation";
import { NamedData } from "../../../../entities/NamedData";

export interface Diagramm extends NamedData {
    classes?: ClassData[],
    relations?: Relation[]
}