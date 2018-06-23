import React from 'react';
import { abbreviate } from '../../../utils/StringUtils';
import { MapEntry } from './entities/MapEntry';



interface Props {
    mapEntries: Array<MapEntry<string>>,
    keyMaxDisplaySize?: number,
    valueMaxDisplaySize?: number
};

const DEFAULT_KEY_MAX_DISPLAY_SIZE: number = 30;
const DEFAULT_VALUE_MAX_DISPLAY_SIZE: number = 140;


export const MapExposure: React.StatelessComponent<Props> = ({ mapEntries, keyMaxDisplaySize, valueMaxDisplaySize }) => {

    const body = mapEntries.map(
        mapEntry =>
            <tr key={mapEntry.key}>
                <td title={mapEntry.key}>{abbreviate(mapEntry.key, keyMaxDisplaySize ? keyMaxDisplaySize : DEFAULT_KEY_MAX_DISPLAY_SIZE)}</td>
                <td title={mapEntry.value}>{abbreviate(mapEntry.value, valueMaxDisplaySize ? valueMaxDisplaySize : DEFAULT_VALUE_MAX_DISPLAY_SIZE)}</td>
            </tr>
    )

    return (
        <table className="w3-table-all">
            <thead>
                <tr className="w3-light-grey">
                    <th>Property</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {body}
            </tbody>
        </table>
    );
}