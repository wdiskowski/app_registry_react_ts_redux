import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { NamedData } from './entities/NamedData';

interface Props {
    appId: string,
    targetId: string,
    url: string,
    diagrammWidth?: number,
    diagrammHeight?: number
};

interface State<DiagrammData extends NamedData> {
    diagramms: DiagrammData[],
    appId: string,
    targetId: string,
    url: string,
    diagrammWidth?: number,
    diagrammHeight?: number
}

export default abstract class AbstractDiagrammTabView<DiagrammData extends NamedData> extends React.Component<Props, State<DiagrammData>> {

    constructor(props: Props) {
        super(props);
        this.state = {
            diagramms: [],
            appId: this.props.appId,
            targetId: this.props.targetId,
            url: this.props.url,
            diagrammWidth: this.props.diagrammWidth,
            diagrammHeight: this.props.diagrammHeight
        }
    }


    render() {
        const tabs = this.state.diagramms.length < 2 ? '' :
            this.state.diagramms.map((diagrammData, index) =>
                <Tab key={index}>{diagrammData.name}</Tab>
            );

        const tabPanels = this.state.diagramms.length < 2 ? '' :
            this.state.diagramms.map((diagrammData, index) =>
                <TabPanel key={index} >
                    {this.createDiagrammElement(diagrammData)}
                </TabPanel>
            );


        return (
            this.state.diagramms.length < 2 ?
                this.createDiagrammElement(this.state.diagramms.length > 0 ? this.state.diagramms[0] : null):
                <Tabs selectedTabClassName={'w3-light-blue'}>
                    <TabList>
                        {tabs}
                    </TabList>
                    {tabPanels}
                </Tabs>);
    }

    componentDidMount() {
        this.loadErData();
    }

    componentDidUpdate() {
        if (this.state.url !== this.props.url) {
            this.setState({ url: this.props.url });
            this.loadErData();
        }
    }

    protected abstract loadErData(): void;
    protected abstract createDiagrammElement(diagrammData: DiagrammData | null): JSX.Element;



}