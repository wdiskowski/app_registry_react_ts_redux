import React from 'react';
import { abbreviate } from '../../../utils/StringUtils';
import { MapEntry } from '../../../entities/MapEntry';
import { Target } from '../../../entities/Target';



interface Props {
    mapEntries: Array<MapEntry<Array<string | null>>>,
    activeTargetName: string,
    comparisonTargetName: string,
    comparisonTargetSelected: (target: Target) => void,
    keyMaxDisplaySize?: number,
    valueMaxDisplaySize?: number
};

const DEFAULT_KEY_MAX_DISPLAY_SIZE: number = 30;
const DEFAULT_VALUE_MAX_DISPLAY_SIZE: number = 140;


export const MapComparison: React.StatelessComponent<Props> = ({ mapEntries, activeTargetName, comparisonTargetName, comparisonTargetSelected, keyMaxDisplaySize, valueMaxDisplaySize }) => {

    const body = mapEntries.map(
        mapEntry =>
            <tr key={mapEntry.key} className={mapEntry.value[0] === mapEntry.value[1] ? '' : 'w3-pale-yellow'}>
                <td title={mapEntry.key}>{abbreviate(mapEntry.key, keyMaxDisplaySize ? keyMaxDisplaySize : DEFAULT_KEY_MAX_DISPLAY_SIZE)}</td>
                <td title={mapEntry.value[0] || ''}>{abbreviate(mapEntry.value[0] || '', valueMaxDisplaySize ? valueMaxDisplaySize : DEFAULT_VALUE_MAX_DISPLAY_SIZE)}</td>
                <td title={mapEntry.value[1] || ''}>{abbreviate(mapEntry.value[1] || '', valueMaxDisplaySize ? valueMaxDisplaySize : DEFAULT_VALUE_MAX_DISPLAY_SIZE)}</td>
            </tr>
    )

    return (
        <table className="w3-table-all">
            <thead>
                <tr className="w3-light-grey">
                    <th>Property</th>
                    <th>{activeTargetName}</th>
                    <th onDragOver={e => e.preventDefault()}
                        onDrop={e => {
                            e.preventDefault();
                            const comparisonTarget = e.dataTransfer.getData('target');
                            if (comparisonTargetSelected && comparisonTarget) { comparisonTargetSelected(JSON.parse(comparisonTarget)) }
                        }}>
                        {comparisonTargetName}
                    </th>
                </tr>
            </thead>
            <tbody>
                {body}
            </tbody>
        </table>
    );
}