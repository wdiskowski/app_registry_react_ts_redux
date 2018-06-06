import React from 'react';
import { findErDiagrammData } from './erDiagrammService';
import ErDiagramm from './ErDiagramm';
import { Diagramm } from './entities/Diagramm';
import AbstractDiagrammTabView from "../common/AbstractDiagrammTabView";

export default class ErDiagrammTabView extends AbstractDiagrammTabView<Diagramm> {

    protected loadErData(): void {
        findErDiagrammData(this.props.url,
            diagramms => this.setState({ diagramms })
        );
    }

    protected createDiagrammElement(diagrammData: Diagramm | null): JSX.Element {
        return <ErDiagramm diagrammData={diagrammData ? diagrammData : { name: '' }} width={this.state.diagrammWidth} height={this.state.diagrammHeight} />
    }
}