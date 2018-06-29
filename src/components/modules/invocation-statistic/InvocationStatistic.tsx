import React from 'react';
import dateformat from 'dateformat';
import { abbreviate } from '../../../utils/StringUtils';
import { InvocationStatisticData } from './entities/InvocationStatisticData';

interface Props {
    invocations: InvocationStatisticData[],
    methodNameMaxDisplaySize?: number,
    exceptionNameMaxDisplaySize?: number
};

const DEFAULT_METHOD_NAME_MAX_DISPLAY_SIZE: number = 40;
const DEFAULT_EXCEPTION_NAME_MAX_DISPLAY_SIZE: number = 40;


export class InvocationStatistic extends React.Component<Props, {}> {


    render() {
        const invocations = this.props.invocations ? this.props.invocations : [];
        const body: any = invocations.map(
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

    extractMethodName(methodNameFull: string): string {
        let calculated = '';
        if (methodNameFull) {
            const matches = methodNameFull.match('(?=.)\\w+(?=\\()');
            if (matches) {
                calculated = abbreviate(matches[0], this.props.methodNameMaxDisplaySize ? this.props.methodNameMaxDisplaySize : DEFAULT_METHOD_NAME_MAX_DISPLAY_SIZE);
            } else {
                calculated = abbreviate(methodNameFull, this.props.methodNameMaxDisplaySize ? this.props.methodNameMaxDisplaySize : DEFAULT_METHOD_NAME_MAX_DISPLAY_SIZE);
            }
        }
        return calculated;
    }

    extractExceptionName(exceptionFull?: string): string {
        let calculated: string = '';
        if (exceptionFull) {
            const matches = exceptionFull.match('(?=.)\\w+(?=:)');
            if (matches) {
                calculated = abbreviate(matches[0], this.props.exceptionNameMaxDisplaySize ? this.props.exceptionNameMaxDisplaySize : DEFAULT_EXCEPTION_NAME_MAX_DISPLAY_SIZE);
            } else {
                calculated = abbreviate(exceptionFull, this.props.exceptionNameMaxDisplaySize ? this.props.exceptionNameMaxDisplaySize : DEFAULT_EXCEPTION_NAME_MAX_DISPLAY_SIZE);
            }
        }
        return calculated;
    }
}