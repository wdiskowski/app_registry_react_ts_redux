import React from 'react';
import nomnoml from 'nomnoml';

interface Props<DiagrammData> {
    diagrammData: DiagrammData,
    width?: number,
    height?: number
};

const DEFAULT_WIDTH = 1250;
const DEFAULT_HEIGHT = 900;

const MIN_WIDTH = 100;
const MIN_HEIGHT = 100;

const WIDTH_GAP = 50;

export abstract class AbstractNomNomlDiagramm<DiagrammData> extends React.Component<Props<DiagrammData>, {}> {

    chart: HTMLCanvasElement | null;

    render() {
        const width = this.props.width && this.props.width > MIN_WIDTH ? this.props.width : DEFAULT_WIDTH;
        const height=  this.props.height && this.props.height > MIN_HEIGHT ? this.props.height : DEFAULT_HEIGHT;
        return (
            <div style={{ width, height, overflow: "auto" }}>
                <canvas style={{ maxWidth: width - WIDTH_GAP }} ref={c => this.chart = c} />
            </div>
        );
    }

    componentDidMount() {
        if (this.chart) {
            nomnoml.draw(this.chart, this.mapDiagrammData(this.props.diagrammData));
        }
    }

    componentDidUpdate() {
        if (this.chart) {
            nomnoml.draw(this.chart, this.mapDiagrammData(this.props.diagrammData));
        }
    }
    
    protected abstract mapDiagrammData(diagrammData: DiagrammData): string;

}