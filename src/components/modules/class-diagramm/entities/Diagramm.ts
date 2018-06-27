import { ClassData } from "./ClassData";
import { Relation } from "./Relation";
import { NamedData } from "../../common/entities/NamedData";

export interface Diagramm extends NamedData {
    classes?: ClassData[],
    relations?: Relation[]
}