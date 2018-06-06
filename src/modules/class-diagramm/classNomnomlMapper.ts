import { ClassData } from "./entities/ClassData";
import { Diagramm } from "./entities/Diagramm";
import { Method } from "./entities/Method";
import { Parameter } from "./entities/Parameter";
import { Property } from "./entities/Property";
import { Relation } from "./entities/Relation";
import { RelationType } from "./entities/RelationType";
import { Visibility } from "./entities/Visibility";

export function map(diagramm: Diagramm): string {
    return diagramm && diagramm.classes ? drawDirectives() + '\n' + drawClasses(diagramm.classes) + '\n' + drawRelations(diagramm) : 'loading...';
}

function drawDirectives(): string {
    return '#lineWidth: 1 \n #stroke: #000000 \n #fill: #cccccc \n #direction: right';
}

function drawClasses(classes: ClassData[]): string {
    return classes.map(
        clazz => drawClass(clazz)
    ).reduce((a, b) => a + '\n' + b);
}

function drawClass(clazz: ClassData): string {
    let clazzDescription = '[' + clazz.name;
    if (hasProperties(clazz)) {
        clazzDescription += '|' + drawClassProperties(clazz.properties);
    }
    if (hasMethods(clazz)) {
        clazzDescription += '|' + drawMethods(clazz.methods);
    }
    return clazzDescription + ']';
}

function hasProperties(clazz: ClassData): boolean {
    return !!clazz.properties && !!clazz.properties.length;
}

function hasMethods(clazz: ClassData): boolean {
    return !!clazz.methods && !!clazz.methods.length;
}

function hasParameters(method: Method): boolean {
    return !!method.parameters && !!method.parameters.length;
}

function drawClassProperties(properties?: Property[]): string {
    return properties ? properties.map(
        property => drawClassProperty(property)
    ).reduce((a, b) => a + ';' + b) : '';
}

function drawClassProperty(property: Property): string {
    return drawVisibility(property.visibility) + ' ' + property.name + drawType(property.type);
}

function drawMethods(methods?: Method[]): string {
    return methods ? methods.map(
        method => drawMethod(method)
    ).reduce((a, b) => a + ';' + b) : '';
}

function drawMethod(method: Method): string {
    return drawVisibility(method.visibility) + ' ' + method.name
        + '(' + (hasParameters(method) ? drawParameters(method.parameters) : '') + ')' + drawType(method.type);
}

function drawParameters(parameters?: Parameter[]): string {
    return parameters ? parameters.map(
        parameter => drawParameter(parameter)
    ).reduce((a, b) => a + ', ' + b) : '';
}

function drawParameter(parameter: Parameter): string {
    return parameter.name + drawType(parameter.type);
}

function drawVisibility(visibility?: Visibility): string {
    let visibilitySign: string = ' ';
    switch (visibility) {
        case Visibility.PRIVATE: visibilitySign = '-'; break;
        case Visibility.PROTECTED: visibilitySign = '#'; break;
        case Visibility.PUBLIC: visibilitySign = '+'; break;
    }
    return visibilitySign;
}

function drawType(type?: string): string {
    return type ? ': ' + type : '';
}


function drawRelations(diagramm: Diagramm): string {
    return diagramm.relations && diagramm.relations.length ? diagramm.relations.map(
        relation => drawRelation(relation, diagramm.classes)
    ).reduce((a, b) => a + '\n' + b) : '';
}

function drawRelation(relation: Relation, classes?: ClassData[]): string {
    const from = findClassNameByKey(relation.from, classes);
    const to = findClassNameByKey(relation.to, classes);
    if (from && to) {
        return '[' + from + ']' + (relation.text ? relation.text : '') + drawAssociation(relation.relationship)
            + (relation.toText ? relation.toText : '') + '[' + to + ']';
    } else {
        return '';
    }
}

function drawAssociation(association?: RelationType): string {
    let associationSign = '-';
    switch (association) {
        case RelationType.AGGREGATION: associationSign += 'o'; break;
        case RelationType.COMPOSITION: associationSign += '+'; break;
        case RelationType.GENERALIZATION: associationSign += ':>'; break;
    }
    return associationSign;
}

function findClassNameByKey(key: number, classes?: ClassData[]): string {
    const found: ClassData | undefined  = classes ? classes.find(clazz => key === clazz.key) : undefined;
    return found ? found.name : '';
}
