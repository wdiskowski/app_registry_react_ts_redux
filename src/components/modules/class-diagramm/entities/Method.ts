import { Visibility } from "./Visibility";
import { Parameter } from "./Parameter";

export interface Method {
    name: string,
    type?: string,
    visibility?: Visibility,
    parameters?: Parameter[]
}