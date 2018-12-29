import { map } from './utils/classNomnomlMapper';
import { Diagramm } from "./entities/Diagramm";
import { AbstractNomNomlDiagramm } from "../common/nomnoml-diagramm/AbstractNomNomlDiagramm";

export class ClassDiagramm extends AbstractNomNomlDiagramm<Diagramm> {

    protected mapDiagrammData(diagrammData: Diagramm): string {
        return map(this.props.diagrammData);
    }
}