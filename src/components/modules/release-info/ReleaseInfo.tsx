import * as React from 'react';
import { Release } from "./entities/Release";
import dateformat from 'dateformat';

interface Props {
    subRegistryData: Release | null
};
export const ReleaseInfo: React.StatelessComponent<Props> = ({ subRegistryData }) => {
    return (subRegistryData ?
        <table className="w3-table-all">
            <thead>
                <tr className="w3-light-grey">
                    <th>Property</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>projekt</td>
                    <td>{subRegistryData.projekt}</td>
                </tr>
                <tr>
                    <td>version</td>
                    <td>{subRegistryData.version}</td>
                </tr>
                <tr>
                    <td>buildDate</td>
                    <td>{dateformat(subRegistryData.buildDate, 'dd.mm.yyyy hh:MM:ss')}
                    </td>
                </tr>
            </tbody>
        </table>
        : null
    );
}
