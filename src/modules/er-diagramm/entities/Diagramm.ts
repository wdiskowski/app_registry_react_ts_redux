import { Table } from "./Table";
import { Relation } from "./Relation";
import { NamedData } from "../../common/entities/NamedData";

export interface Diagramm extends NamedData {
    entities?: Table[],
    relations?: Relation[]
}