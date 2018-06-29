import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Application } from '../../entities/Application';
import { MapEntry } from "../../entities/MapEntry";
import { Target } from '../../entities/Target';
import { modulExists, getComponent } from '../modules/common/utils/componentFactory';


interface Props {
    sideWidth: number,
    activeApp: Application | null,
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
                <Tabs selectedTabClassName='w3-light-blue' selectedIndex={this.props.activeRegistryIndex}
                    onSelect={(tabIndex: number) => this.props.registrySelected(tabIndex)}>
                    <TabList>
                        {header}
                        <sup >{this.props.activeTarget ? `${this.props.activeTarget.applicationName} (${this.props.activeTarget.name})` : ''}</sup>
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