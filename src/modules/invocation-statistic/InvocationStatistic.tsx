import * as React from 'react';
import { abbreviate } from '../../utils/StringUtils';
import { InvocationStatisticData } from "./entities/InvocationStatisticData";
import dateformat from 'dateformat';

interface Props {
    invocationStatisticData: InvocationStatisticData[];
};

interface State {
    invocationStatisticData: InvocationStatisticData[];
}

export default class InvocationStatistic extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            invocationStatisticData: this.props.invocationStatisticData
        }
    }


 
    render() {

        const body: any = this.state.invocationStatisticData.map(
            monitoringItem =>
                (
                    <tr key={monitoringItem.methodName}>
                        <td title={monitoringItem.methodName} style={{ width: "20%" }}>{this.extractMethodName(monitoringItem.methodName)}</td>
                        <td>{monitoringItem.maxDuration}</td>
                        <td>{monitoringItem.averageDuration}</td>
                        <td>{monitoringItem.recentDuration}</td>
                        <td>{monitoringItem.numberOfExceptions}</td>
                        <td>{monitoringItem.numberOfInvocations}</td>
                        <td title={monitoringItem.exception}>{this.extractExceptionName(monitoringItem.exception)}</td>
                        <td>{dateformat(new Date(monitoringItem.lastInvocationTimestamp), 'dd.mm.yyyy hh:MM:ss')}</td>
                    </tr>
                )
        );

        return (
            <table className="w3-table-all">
                <thead>
                    <tr className="w3-light-grey">
                        <th rowSpan={2} style={{ textAlign: "center" }}>Method</th>
                        <th colSpan={3} style={{ textAlign: "center" }}>Duration (ms)</th>
                        <th colSpan={2} style={{ textAlign: "center" }}>Number of</th>
                        <th rowSpan={2} style={{ textAlign: "center" }}>Exception</th>
                        <th rowSpan={2} style={{ textAlign: "center" }}>Last invocation</th>
                    </tr>
                    <tr className="w3-light-grey">
                        <th style={{ textAlign: "center" }}>max</th>
                        <th style={{ textAlign: "center" }}>average</th>
                        <th style={{ textAlign: "center" }}>recent</th>
                        <th style={{ textAlign: "center" }}>exceptions</th>
                        <th style={{ textAlign: "center" }}>invocations</th>
                    </tr>
                </thead>
                <tbody>
                    {body}
                </tbody>
            </table>
        );
    }

    componentDidUpdate() {
        if (this.state.invocationStatisticData !== this.props.invocationStatisticData) {
            this.setState({ invocationStatisticData: this.props.invocationStatisticData })
        }
    }
    extractMethodName(methodNameFull: string): string {
        let calculated = '';
        if (methodNameFull) {
            const matches = methodNameFull.match('(?=.)\\w+(?=\\()');
            if (matches) {
                calculated = abbreviate(matches[0], 40);
            } else {
                calculated = abbreviate(methodNameFull, 40);
            }
        }
        return calculated;
    }

    extractExceptionName(exceptionFull?: string): string {
        let calculated: string = '';
        if (exceptionFull) {
            const matches = exceptionFull.match('(?=.)\\w+(?=:)');
            if (matches) {
                calculated = abbreviate(matches[0], 40);
            } else {
                calculated = abbreviate(exceptionFull, 40);
            }
        }
        return calculated;
    }
}