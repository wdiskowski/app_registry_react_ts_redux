import { RelationType } from "./RelationType";

export interface Relation {
    from: number, 
    to: number, 
    text?: string, 
    toText?: string,
    relationship?: RelationType
}