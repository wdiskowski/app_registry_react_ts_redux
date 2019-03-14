import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Application } from '../../entities/Application';
import { MapEntry } from "../../entities/MapEntry";
import { Target } from '../../entities/Target';
import { modulExists, getComponent } from '../modules/common/utils/componentFactory';


interface Props {
    sideWidth: number,
    activeTargetParentApp?: Application,
    activeTarget: Target | null,
    activeRegistryIndex: number,
    registriesData: Array<MapEntry<string>>,
    fetchRegistries: (activeTarget: Target) => void,
    registrySelected: (registryIndex: number) => void
};

export class Registries extends React.Component<Props, {}> {
    render() {
        const header = this.props.registriesData.map(entry => modulExists(entry.key) ? <Tab key={entry.key}>{entry.key}</Tab> : '');
        const body = this.props.registriesData.map(entry => modulExists(entry.key) ? <TabPanel key={entry.key}> {getComponent(entry.key)} </TabPanel> : '');
        return (
            <div style={{ marginLeft: this.props.sideWidth }}>
               
               <h4 className={'w3-center w3-light-grey'}>{this.props.activeTarget ? `${this.props.activeTargetParentApp ? this.props.activeTargetParentApp.title ? this.props.activeTargetParentApp.title : this.props.activeTargetParentApp.name : this.props.activeTarget.applicationName} (${this.props.activeTarget.name})` : ''}</h4>
                <Tabs selectedTabClassName='w3-light-blue' selectedIndex={this.props.activeRegistryIndex}
                    onSelect={(tabIndex: number) => this.props.registrySelected(tabIndex)}>
                    <TabList>
                        {header}
                    </TabList>
                    {body}
                </Tabs>
            </div>
        )
    }

    componentDidMount() {
        if (this.props.activeTarget) { this.props.fetchRegistries(this.props.activeTarget) };
    }

    componentDidUpdate() {
        if (this.props.activeTarget && this.props.registriesData.length === 0) { this.props.fetchRegistries(this.props.activeTarget) };
    }
}