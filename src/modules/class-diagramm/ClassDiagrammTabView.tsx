import React from 'react';
import { findClassDiagrammData } from './classDiagrammService';
import ClassDiagramm from './ClassDiagramm';
import { Diagramm } from './entities/Diagramm';
import AbstractDiagrammTabView from "../common/AbstractDiagrammTabView";

export default class ClassDiagrammTabView extends AbstractDiagrammTabView<Diagramm> {

    protected loadErData(): void {
        findClassDiagrammData(this.props.url,
            diagramms => this.setState({ diagramms })
        );
    }

    protected createDiagrammElement(diagrammData: Diagramm | null): JSX.Element {
        return <ClassDiagramm diagrammData={diagrammData ? diagrammData : { name: '' }} width={this.state.diagrammWidth} height={this.state.diagrammHeight} />
    }
}