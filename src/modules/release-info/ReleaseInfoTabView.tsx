import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReleaseInfo from './ReleaseInfo';
import { Release } from './entities/Release';
import { findReleaseInfoData } from './releaseInfoService';

interface Props {
    appId: string,
    targetId: string,
    url: string
};

interface State {
    releaseInfoData: Release[];
    appId: string,
    targetId: string,
    url: string
}

export default class ReleaseInfoTabView extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            releaseInfoData: [],
            appId: this.props.appId,
            targetId: this.props.targetId,
            url: this.props.url
        }
    }

    render() {
        const tabs = this.state.releaseInfoData.length < 2 ? '' :
            this.state.releaseInfoData.map((releaseInfoTabData, index) =>
                <Tab key={index}>{releaseInfoTabData.projekt}</Tab>
            );

        const tabPanels = this.state.releaseInfoData.length < 2 ? '' :
            this.state.releaseInfoData.map((releaseInfoTabData, index) =>
                <TabPanel key={index} >
                    <ReleaseInfo releaseInfoData={releaseInfoTabData} />
                </TabPanel>
            );


        return (
            this.state.releaseInfoData.length < 2 ?
                <ReleaseInfo releaseInfoData={this.state.releaseInfoData.length > 0 ? this.state.releaseInfoData[0] : undefined} /> :
                <Tabs selectedTabClassName={'w3-light-blue'}>
                    <TabList>
                        {tabs}
                    </TabList>
                    {tabPanels}
                </Tabs>);
    }

    componentDidMount() {
        this.loadReleaseInfoData();
    }

    componentDidUpdate() {
        if (this.state.url !== this.props.url) {
            this.setState({ url: this.props.url });
            this.loadReleaseInfoData();
        }
    }

    loadReleaseInfoData() {
        findReleaseInfoData(this.props.url,
            releaseInfoData => this.setState({
                releaseInfoData: Array.isArray(releaseInfoData) ? releaseInfoData : new Array(releaseInfoData)
            })
        );
    }
}