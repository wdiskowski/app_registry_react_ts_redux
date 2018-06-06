import React from 'react';
import nomnoml from 'nomnoml';

interface Props<DiagrammData> {
    diagrammData: DiagrammData,
    width?: number,
    height?: number
};

interface State<DiagrammData> {
    diagrammData: DiagrammData,
    width: number,
    height: number
}

const DEFAULT_WIDTH = 1250;
const DEFAULT_HEIGHT = 900;

const MIN_WIDTH = 100;
const MIN_HEIGHT = 100;

const WIDTH_GAP = 50;

export default abstract class AbstractNomNomlDiagramm<DiagrammData> extends React.Component<Props<DiagrammData>, State<DiagrammData>> {

    chart: HTMLCanvasElement | null;

    constructor(props: Props<DiagrammData>) {
        super(props);
        this.state = {
            diagrammData: this.props.diagrammData,
            width: this.props.width && this.props.width > MIN_WIDTH ? this.props.width : DEFAULT_WIDTH,
            height: this.props.height && this.props.height > MIN_HEIGHT ? this.props.height : DEFAULT_HEIGHT,
        }
    }

    render() {
        return (
            <div style={{ width: this.state.width, height: this.state.height, overflow: "auto" }}>
                <canvas style={{ maxWidth: this.state.width - WIDTH_GAP }} ref={c => this.chart = c} />
            </div>
        );
    }

    componentDidMount() {
        if (this.chart) {
            nomnoml.draw(this.chart, this.mapDiagrammData(this.state.diagrammData));
        }
    }

    componentDidUpdate() {
        if (this.chart && this.state.diagrammData !== this.props.diagrammData) {
            this.setState({ diagrammData: this.props.diagrammData });
            nomnoml.draw(this.chart, this.mapDiagrammData(this.props.diagrammData));
        }
    }

    protected abstract mapDiagrammData(diagrammData: DiagrammData): string;

}