import { map } from './utils/erNomnomlMapper';
import { Diagramm } from "./entities/Diagramm";
import { AbstractNomNomlDiagramm } from "../common/AbstractNomNomlDiagramm";

export class ErDiagramm extends AbstractNomNomlDiagramm<Diagramm> {

    protected mapDiagrammData(diagrammData: Diagramm): string {
        return map(this.props.diagrammData);
    }
}