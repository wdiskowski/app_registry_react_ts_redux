import { Method } from "./Method";
import { Property } from "./Property";

export interface ClassData {
    key: number,
    name: string,
    properties?: Property[],
    methods?: Method[]
}