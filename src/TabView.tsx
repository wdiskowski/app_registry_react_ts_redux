import React from "react";
import ErDiagrammTabView from './modules/er-diagramm/ErDiagrammTabView';
import ClassDiagrammTabView from './modules/class-diagramm/ClassDiagrammTabView';
import ConfigInfoTabView from './modules/config-info/ConfigInfoTabView';
import ReleaseInfoTabView from './modules/release-info/ReleaseInfoTabView';
import LogInfoTabView from './modules/log-info/LogInfoTabView';
import InterfaceInfoTabView from './modules/interface-info/InterfaceInfoTabView';
import InvocationStatisticTabView from './modules/invocation-statistic/InvocationStatisticTabView';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { findUrl } from './services/applicationService';
import { findRegistryData } from './services/registryService';
import { Registry } from './entities/Registry';

interface Props {
    appId: string,
    targetId: string,
    sideWidth: number
};

interface State {
    tabIndex: number,
    baseUrl: string,
    registryData: Registry,
    appId: string,
    targetId: string
}

export default class TabView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            tabIndex: 0,
            baseUrl: '',
            registryData: { releaseInfo: '' },
            appId: this.props.appId,
            targetId: this.props.targetId
        }
    }
    render() {
        return (
            <div style={{ marginLeft: this.props.sideWidth }}>
                <Tabs selectedTabClassName='w3-light-blue' selectedIndex={this.state.tabIndex}
                    onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList>
                        <Tab>Release Info</Tab>
                        <Tab disabled={!this.state.registryData.configInfo}>Config Info</Tab>
                        <Tab disabled={!this.state.registryData.logInfo}>Log Info</Tab>
                        <Tab disabled={!this.state.registryData.interfaceInfo}>Interface Info</Tab>
                        <Tab disabled={!this.state.registryData.monitoringInfo}>Invocation Statistic</Tab>
                        <Tab disabled={!this.state.registryData.erDiagramm}>ER Diagramm</Tab>
                        <Tab disabled={!this.state.registryData.classDiagramm}>Class Diagramm</Tab>
                        <sup>{this.props.appId} ({this.props.targetId})</sup>
                    </TabList>
                    <TabPanel>
                        <ReleaseInfoTabView appId={this.props.appId} targetId={this.props.targetId}
                            url={this.state.baseUrl + (this.state.registryData.releaseInfo ? this.state.registryData.releaseInfo : '')} />
                    </TabPanel>
                    <TabPanel>
                        <ConfigInfoTabView appId={this.props.appId} targetId={this.props.targetId}
                            url={this.state.baseUrl + (this.state.registryData.configInfo ? this.state.registryData.configInfo : '')} />
                    </TabPanel>
                    <TabPanel>
                        <LogInfoTabView appId={this.props.appId} targetId={this.props.targetId}
                            url={this.state.baseUrl + (this.state.registryData.logInfo ? this.state.registryData.logInfo : '')} />
                    </TabPanel>
                    <TabPanel>
                        <InterfaceInfoTabView appId={this.props.appId} targetId={this.props.targetId}
                            url={this.state.baseUrl + (this.state.registryData.interfaceInfo ? this.state.registryData.interfaceInfo : '')} />
                    </TabPanel>
                    <TabPanel>
                        <InvocationStatisticTabView appId={this.props.appId} targetId={this.props.targetId}
                            baseUrl={this.state.baseUrl} relativePath={(this.state.registryData.monitoringInfo ? this.state.registryData.monitoringInfo : {slowest: '', exceptional: ''})} />
                    </TabPanel>
                    <TabPanel>
                        <ErDiagrammTabView appId={this.props.appId} targetId={this.props.targetId}
                            url={this.state.baseUrl + (this.state.registryData.erDiagramm ? this.state.registryData.erDiagramm : "")} />
                    </TabPanel>
                    <TabPanel>
                        <ClassDiagrammTabView appId={this.props.appId} targetId={this.props.targetId}
                            url={this.state.baseUrl + (this.state.registryData.classDiagramm ? this.state.registryData.classDiagramm : "")} />
                    </TabPanel>
                </Tabs>
            </div>
        )
    }

    componentDidUpdate() {
        const { appId, targetId } = this.props;
        if (appId !== this.state.appId || targetId !== this.state.targetId) {
            this.setState({ appId, targetId, tabIndex: 0 })
            this.loadRegistryData();
        }
    }

    componentDidMount() {
        this.loadRegistryData();
    }

    loadRegistryData() {
        return findUrl(this.props.appId, this.props.targetId,
            baseUrl => {
                this.setState({ baseUrl });
                findRegistryData(baseUrl + "/registry",
                    registryData => this.setState({ registryData })
                );
            }
        );
    }

}

