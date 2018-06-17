import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import InvocationStatistic from './InvocationStatistic';
import { InvocationStatisticData } from './entities/InvocationStatisticData';
import { findSlowest, findExceptional } from './invocationStatisticService';
import { Monitoring } from './entities/Monitoring';

interface Props {
    appId: string,
    targetId: string,
    baseUrl: string,
    relativePath: Monitoring
};

interface State {
    slowestMethods: InvocationStatisticData[],
    exceptionalMethods: InvocationStatisticData[],
    appId: string,
    targetId: string,
    baseUrl: string,
    relativePath: Monitoring
}

export default class InvocationStatisticTabView extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            slowestMethods: [],
            exceptionalMethods: [],
            appId: this.props.appId,
            targetId: this.props.targetId,
            baseUrl: this.props.baseUrl,
            relativePath: this.props.relativePath
        }
    }

    render() {
        return (
            <Tabs selectedTabClassName={'w3-light-blue'}>
                <TabList>
                    <Tab>Slowest</Tab>
                    <Tab>Exceptional</Tab>
                </TabList>
                <TabPanel>
                    <InvocationStatistic invocationStatisticData={this.state.slowestMethods} />
                </TabPanel>
                <TabPanel>
                    <InvocationStatistic invocationStatisticData={this.state.exceptionalMethods} />
                </TabPanel>
            </Tabs>
        );
    }

    componentDidMount() {
        this.loadMonitoringInfoData();
    }

    componentDidUpdate() {
        if (this.state.baseUrl !== this.props.baseUrl) {
            this.setState({ baseUrl: this.props.baseUrl, relativePath: this.props.relativePath });
            this.loadMonitoringInfoData();
        }
    }

    loadMonitoringInfoData(): void {
        if (this.props.relativePath) {
            if (this.props.relativePath.slowest) {
                findSlowest(this.props.baseUrl + this.props.relativePath.slowest,
                    slowestMethods => this.setState({ slowestMethods })

                );
            }
            if (this.props.relativePath.exceptional) {
                findExceptional(this.props.baseUrl + this.props.relativePath.exceptional,
                    exceptionalMethods => this.setState({ exceptionalMethods })

                )
            }
        }
    }
}