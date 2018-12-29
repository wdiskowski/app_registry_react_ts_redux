import React from "react";
import { ErDiagramm } from './ErDiagramm';
import { AbstractMultidataExposure } from "../common/data-exposure/AbstractMultidataExposure";
import { Diagramm } from "./entities/Diagramm";

export class ErDiagramms extends AbstractMultidataExposure<Diagramm> {
    protected createDataComponent(data: Diagramm): JSX.Element {
        return <ErDiagramm diagrammData={data} />;
    }
}