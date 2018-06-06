import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import InterfaceInfo from './InterfaceInfo';
import { NamedInterface } from './entities/NamedInterface';
import { InterfaceData } from './entities/InerfaceData';
import { findInterfaceInfoData } from './interfaceInfoService';
import { sort } from '../../utils/PropertySorter';

interface Props {
    appId: string,
    targetId: string,
    url: string
};

interface State {
    interfaceMultiData: NamedInterface[];
    appId: string,
    targetId: string,
    url: string
}

export default class ReleaseInfoTabView extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            interfaceMultiData: [],
            appId: this.props.appId,
            targetId: this.props.targetId,
            url: this.props.url
        }
    }

    render() {
        const tabs = this.state.interfaceMultiData.length < 2 ? '' :
            this.state.interfaceMultiData.map((interfaceTabData, index) =>
                <Tab key={index}>{interfaceTabData.name}</Tab>
            );

        const tabPanels = this.state.interfaceMultiData.length < 2 ? '' :
            this.state.interfaceMultiData.map((interfaceTabData, index) =>
                <TabPanel key={index} >
                    <InterfaceInfo interfaceData={sort(interfaceTabData.interfaceInfoData, 'name')} />
                </TabPanel>
            );


        return (
            this.state.interfaceMultiData.length < 2 ?
                <InterfaceInfo interfaceData={this.state.interfaceMultiData.length > 0 ? sort(this.state.interfaceMultiData[0].interfaceInfoData, 'name') : []} /> :
                <Tabs selectedTabClassName={'w3-light-blue'}>
                    <TabList>
                        {tabs}
                    </TabList>
                    {tabPanels}
                </Tabs>);
    }

    componentDidMount() {
        this.loadInterfaceData();
    }

    componentDidUpdate() {
        if (this.state.url !== this.props.url) {
            this.setState({ url: this.props.url });
            this.loadInterfaceData();
        }
    }

    isNamedInterrfaceArray(data: InterfaceData[] | NamedInterface[]): data is NamedInterface[] {
        return Array.isArray(data) && !!data.length && 'interfaceInfoData' in data[0];
    }

    loadInterfaceData(): void {
        findInterfaceInfoData(this.props.url,
            data => this.setState({
                interfaceMultiData: this.isNamedInterrfaceArray(data) ? data : [{ name: 'default', interfaceInfoData: data }]
            })
        );
    }
}