import { map } from './classNomnomlMapper';
import { Diagramm } from "./entities/Diagramm";
import AbstractNomNomlDiagramm from "../common/AbstractNomNomlDiagramm";

export default class ClassDiagramm extends AbstractNomNomlDiagramm<Diagramm> {

    protected mapDiagrammData(diagrammData: Diagramm): string {
        return map(this.props.diagrammData);
    }

}