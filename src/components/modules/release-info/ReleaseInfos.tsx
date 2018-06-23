import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ReleaseInfo } from './ReleaseInfo'
import { RegistryCollection } from "../../../entities/RegistryCollection";
import { Target } from "../../../entities/Target";
import { Registry } from "../../../entities/Registry";

interface Props {
    activeTarget: Target,
    registryCollection: RegistryCollection,
    activeRegistry: Registry,
    fetchData: (target: Target, registryCollection: RegistryCollection) => void
};

export class ReleaseInfos extends React.Component<Props, {}> {

    public componentDidMount() {
        if(this.props.registryCollection) {
            this.props.fetchData(this.props.activeTarget, this.props.registryCollection);
        }
    }

    public componentDidUpdate() {
        if(this.props.registryCollection && this.props.activeRegistry.data.length === 0) {
            this.props.fetchData(this.props.activeTarget, this.props.registryCollection);
        }
    }    

    public render() {
        const { activeRegistry } = this.props;
        const tabs = activeRegistry.data.length < 2 ? '' :
            activeRegistry.data.map((releaseInfoTabData, index) =>
                <Tab key={index}>{releaseInfoTabData.projekt}</Tab>
            );

        const tabPanels = activeRegistry.data.length < 2 ? '' :
            activeRegistry.data.map((releaseInfoTabData, index) =>
                <TabPanel key={index} >
                    <ReleaseInfo subRegistryData={releaseInfoTabData} />
                </TabPanel>
            );


        return (
            activeRegistry.data.length < 2 ?
                <ReleaseInfo subRegistryData={activeRegistry.data.length > 0 ? activeRegistry.data[0] : null} /> :
                <Tabs selectedTabClassName={'w3-light-blue'}>
                    <TabList>
                        {tabs}
                    </TabList>
                    {tabPanels}
                </Tabs>);
    }
}