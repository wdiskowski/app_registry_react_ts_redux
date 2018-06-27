import React from "react";
import { ClassDiagramm } from './ClassDiagramm';
import { AbstractMultidataExposure } from "../common/AbstractMultidataExposure";
import { Diagramm } from "./entities/Diagramm";

export class ClassDiagramms extends AbstractMultidataExposure<Diagramm> {
    protected createDataComponent(data: Diagramm): JSX.Element {
        return <ClassDiagramm diagrammData={data} />;
    }
}