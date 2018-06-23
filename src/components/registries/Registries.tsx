import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Application } from '../../entities/Application';
import { Target } from '../../entities/Target';
import { RegistryCollection } from '../../entities/RegistryCollection';
import { ReleaseInfoContainer } from '../modules/release-info';

interface Props {
    sideWidth: number,
    activeApp: Application | null,
    activeTarget: Target | null,
    activeRegistryIndex: number,
    registriesData: RegistryCollection | null,
    fetchRegistries: (activeTarget: Target) => void,
    registrySelected: (registryIndex: number) => void
};

export class Registries extends React.Component<Props, {}> {
    render() {
        return (
            <div style={{ marginLeft: this.props.sideWidth }}>
                <Tabs selectedTabClassName='w3-light-blue' selectedIndex={this.props.activeRegistryIndex}
                    onSelect={(tabIndex: number) => this.props.registrySelected(tabIndex)}>
                    <TabList>
                        <Tab>Release Info</Tab>
                        <Tab disabled={!this.props.registriesData || !this.props.registriesData.configInfo}>Config Info</Tab>
                        <Tab disabled={!this.props.registriesData || !this.props.registriesData.logInfo}>Log Info</Tab>
                        <Tab disabled={!this.props.registriesData || !this.props.registriesData.interfaceInfo}>Interface Info</Tab>
                        <Tab disabled={!this.props.registriesData || !this.props.registriesData.monitoringInfo}>Invocation Statistic</Tab>
                        <Tab disabled={!this.props.registriesData || !this.props.registriesData.erDiagramm}>ER Diagramm</Tab>
                        <Tab disabled={!this.props.registriesData || !this.props.registriesData.classDiagramm}>Class Diagramm</Tab>
                        <sup >{this.props.activeApp && this.props.activeTarget ? `${this.props.activeApp.name} (${this.props.activeTarget.name})` : ''}</sup>
                    </TabList>
                    <TabPanel>
                        <ReleaseInfoContainer />
                    </TabPanel>
                    <TabPanel>2
                        {/* 
                        <ConfigInfoTabView appId={this.props.appId} targetId={this.props.targetId}
                            url={this.state.baseUrl + (this.state.registriesData.configInfo ? this.state.registriesData.configInfo : '')} />
                        */}
                    </TabPanel>
                    <TabPanel>3
                        {/* 
                        <LogInfoTabView appId={this.props.appId} targetId={this.props.targetId}
                            url={this.state.baseUrl + (this.state.registriesData.logInfo ? this.state.registriesData.logInfo : '')} />
                        */}
                    </TabPanel>
                    <TabPanel>4
                        {/* 
                        <InterfaceInfoTabView appId={this.props.appId} targetId={this.props.targetId}
                            url={this.state.baseUrl + (this.state.registriesData.interfaceInfo ? this.state.registriesData.interfaceInfo : '')} />
                        */}
                    </TabPanel>
                    <TabPanel>5
                        {/* 
                        <InvocationStatisticTabView appId={this.props.appId} targetId={this.props.targetId}
                            baseUrl={this.state.baseUrl} relativePath={(this.state.registriesData.monitoringInfo ? this.state.registriesData.monitoringInfo : {slowest: '', exceptional: ''})} />
                        */}
                    </TabPanel>
                    <TabPanel>6
                        {/* 
                        <ErDiagrammTabView appId={this.props.appId} targetId={this.props.targetId}
                            url={this.state.baseUrl + (this.state.registriesData.erDiagramm ? this.state.registriesData.erDiagramm : "")} />
                        */}
                    </TabPanel>
                    <TabPanel>7
                        {/* 
                        <ClassDiagrammTabView appId={this.props.appId} targetId={this.props.targetId}
                            url={this.state.baseUrl + (this.state.registriesData.classDiagramm ? this.state.registriesData.classDiagramm : "")} />
                        */}
                    </TabPanel>
                </Tabs>
            </div>
        )
    }

    componentDidMount() {
        if (this.props.activeTarget) { this.props.fetchRegistries(this.props.activeTarget) };
    }

}