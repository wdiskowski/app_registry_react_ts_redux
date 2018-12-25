import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Target } from "../../../entities/Target";
import { Registry } from "../../../entities/Registry";
import { NamedData } from "../../../entities/NamedData";

interface Props {
    activeTarget: Target,
    registryUrl: string,
    activeRegistry: Registry<NamedData>,
    fetchData: (target: Target, registryUrl: string) => void,
    comparisonTargetSelected: (target: Target) => void | undefined
};
export abstract class AbstractMultidataExposure<T extends NamedData> extends React.Component<Props, {}> {
    
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
        const activeRegistryData = this.props.activeRegistry.data as T[];

        const tabs = activeRegistryData.length < 2 ? '' :
            activeRegistryData.map((namedData, index) =>
                <Tab key={index}>{namedData.name}</Tab>
            );

        const tabPanels = activeRegistryData.length < 2 ? '' :
            activeRegistryData.map((namedMap, index) =>
                <TabPanel key={index} >
                    {this.createDataComponent(namedMap, this.props.comparisonTargetSelected)}
                </TabPanel>
            );


        return (
            activeRegistryData.length < 2 ?
                this.createDataComponent(activeRegistryData.length > 0 ? activeRegistryData[0] : null, this.props.comparisonTargetSelected) :
                <Tabs selectedTabClassName={'w3-light-blue'}>
                    <TabList>
                        {tabs}
                    </TabList>
                    {tabPanels}
                </Tabs>);
    }

    protected abstract createDataComponent(namedData: T | null, comparisonTargetSelected?: (target: Target) => void): JSX.Element;
}