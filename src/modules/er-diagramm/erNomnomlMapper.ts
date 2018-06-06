import { Column } from "./entities/Column";
import { Diagramm } from "./entities/Diagramm";
import { Relation } from "./entities/Relation";
import { Table } from "./entities/Table";

export function map(erData: Diagramm): string {
    return erData && erData.entities ? drawDirectives() + '\n' + drawEntities(erData.entities) + '\n' + drawRelationships(erData.relations): 'loading...';
}

function drawDirectives(): string {
    return '#lineWidth: 1 \n #stroke: #000000 \n #fill: #f1f1f1 \n #direction: right';
}

function drawEntities(entities: Table[]): string {
    return entities.map(
        entity => drawEntity(entity)
    ).reduce((a, b) => a + '\n' + b);
}

function drawEntity(entity: Table): string {
    if(hasItems(entity)) {
        return '[' + entity.key + '|' + drawEntityProperties(entity) + ']';
    } else {
        return '[' + entity.key + ']';
    }
}

function hasItems(entity: Table): boolean {
    return !!entity.items && !!entity.items.length;
}

function drawEntityProperties(entity: Table): string {
    return entity.items ? entity.items.map(
        item => drawEntityProperty(item)
    ).reduce((a, b) => a + '|' + b) : '';
}

function drawEntityProperty(item: Column): string {
    return item.iskey ? '# ' + item.name : '  ' + item.name;
}

function drawRelationships(relationships?: Relation[] ): string {
    return relationships && relationships.length ? relationships.map(
        relationship => drawRelationship(relationship)
    ).reduce((a, b) => a + '\n' + b) : '';
}

function drawRelationship(relationship: Relation): string {
    return '[' + relationship.from + ']' + (relationship.text ? relationship.text : '') + '-'
    + (relationship.toText ? relationship.toText : '') + '[' + relationship.to + ']';
}
