import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MapExposure } from './MapExposure';
import { Target } from "../../../entities/Target";
import { Registry } from "../../../entities/Registry";
import { NamedMap } from "./entities/NamedMap";
import { sort } from '../../../utils/PropertySorter';

interface Props {
    activeTarget: Target,
    registryUrl: string,
    activeRegistry: Registry,
    fetchData: (target: Target, registryUrl: string) => void
};
export class MapsExposure extends React.Component<Props, {}> {
    public componentDidMount() {
        if (this.props.registryUrl) {
            this.props.fetchData(this.props.activeTarget, this.props.registryUrl);
        }
    }

    public componentDidUpdate() {
        if (this.props.registryUrl && this.props.activeRegistry.data.length === 0) {
            this.props.fetchData(this.props.activeTarget, this.props.registryUrl);
        }
    }

    render() {
        const activeRegistryData = this.props.activeRegistry.data as NamedMap[];

        const tabs = activeRegistryData.length < 2 ? '' :
            activeRegistryData.map((namedMap, index) =>
                <Tab key={index}>{namedMap.name}</Tab>
            );

        const tabPanels = activeRegistryData.length < 2 ? '' :
            activeRegistryData.map((namedMap, index) =>
                <TabPanel key={index} >
                    <MapExposure mapEntries={sort(namedMap.mapData, 'key')} />
                </TabPanel>
            );


        return (
            activeRegistryData.length < 2 ?
                <MapExposure mapEntries={activeRegistryData.length > 0 ? sort(activeRegistryData[0].mapData, 'key') : []} /> :
                <Tabs selectedTabClassName={'w3-light-blue'}>
                    <TabList>
                        {tabs}
                    </TabList>
                    {tabPanels}
                </Tabs>);
    }

}