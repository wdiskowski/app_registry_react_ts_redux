import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Target } from "../../../entities/Target";
import { Registry } from "../../../entities/Registry";
import { NamedData } from "../../../entities/NamedData";
import { arrayFind } from "../../../utils/arrayUtils";

interface Props {
    activeTargetName: string,
    comparisonTarget: Target,
    registryUrl: string,
    activeRegistry: Registry<NamedData>,
    fetchComparisonData: (target: Target, registryUrl: string) => void,
    comparisonTargetSelected: (target: Target) => void | undefined
};
export abstract class AbstractMultidataComparison<T extends NamedData> extends React.Component<Props, {}> {

    public componentDidMount() {
        if (this.props.registryUrl) {
            this.props.fetchComparisonData(this.props.comparisonTarget, this.props.registryUrl);
        }
    }

    public componentDidUpdate() {
        if (this.props.registryUrl && (!this.props.activeRegistry.comparisonData || this.props.activeRegistry.comparisonData.length === 0)) {
            this.props.fetchComparisonData(this.props.comparisonTarget, this.props.registryUrl);
        }
    }

    render() {
        const activeRegistryData = this.props.activeRegistry.data as T[];
        const comparisonRegistryData = this.props.activeRegistry.comparisonData as T[];

        const tabs = activeRegistryData.length < 2 ? '' :
            activeRegistryData.map((namedData, index) =>
                <Tab key={index}>{namedData.name}</Tab>
            );

        const tabPanels = activeRegistryData.length < 2 ? '' :
            activeRegistryData.map((namedData, index) =>
                <TabPanel key={index} >
                    {this.createDataComponent(this.props.activeTargetName,
                        this.props.comparisonTarget.name, 
                        this.props.comparisonTargetSelected,
                        namedData,
                        comparisonRegistryData ? arrayFind(comparisonRegistryData,
                            c => c.name === namedData.name) : null)}
                </TabPanel>
            );


        return (
            activeRegistryData.length < 2 ?
                this.createDataComponent(this.props.activeTargetName,
                    this.props.comparisonTarget.name,
                    this.props.comparisonTargetSelected,
                    activeRegistryData[0],
                    comparisonRegistryData && comparisonRegistryData.length > 0 ?
                    arrayFind(comparisonRegistryData,
                        c => c.name === activeRegistryData[0].name) : null) :
                <Tabs selectedTabClassName={'w3-light-blue'}>
                    <TabList>
                        {tabs}
                    </TabList>
                    {tabPanels}
                </Tabs>);
    }

    protected abstract createDataComponent(activeTargetName: string,
        comparisonTargetName: string,
        comparisonTargetSelected: (target: Target) => void, 
        namedData: T, comparisonData?: T | null): JSX.Element;
}