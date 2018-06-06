import { Column } from "./Column";

export interface Table {
    key: string,
    items?: Column[]
}