import React from 'react';
import { isJson } from '../../../../utils/jsonUtils';
import { abbreviate } from '../../../../utils/StringUtils';
import { MapEntry } from '../../../../entities/MapEntry';
import { Target } from '../../../../entities/Target';



interface Props {
    mapEntries: Array<MapEntry<string>>,
    keyMaxDisplaySize?: number,
    valueMaxDisplaySize?: number,
    comparisonTargetSelected?: (target: Target) => void
};

const DEFAULT_KEY_MAX_DISPLAY_SIZE: number = 30;
const DEFAULT_VALUE_MAX_DISPLAY_SIZE: number = 140;


export const MapExposure: React.StatelessComponent<Props> = ({ mapEntries, keyMaxDisplaySize, valueMaxDisplaySize, comparisonTargetSelected }) => {

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
                    <th onDragOver={e => e.preventDefault()}
                        onDrop={e => {
                            e.preventDefault();
                            const comparisonTarget = e.dataTransfer.getData('text');
                            if (comparisonTargetSelected && comparisonTarget && isJson(comparisonTarget)) { comparisonTargetSelected(JSON.parse(comparisonTarget)) }
                        }}>
                        Value
                    </th>
                </tr>
            </thead>
            <tbody>
                {body}
            </tbody>
        </table>
    );
}