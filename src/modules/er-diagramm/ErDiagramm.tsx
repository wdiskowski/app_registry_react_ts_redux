import { map } from './erNomnomlMapper';
import { Diagramm } from "./entities/Diagramm";
import AbstractNomNomlDiagramm from "../common/AbstractNomNomlDiagramm";


export default class ErDiagramm extends AbstractNomNomlDiagramm<Diagramm> {

    protected mapDiagrammData(diagrammData: Diagramm): string {
        return map(this.props.diagrammData);
    }
}