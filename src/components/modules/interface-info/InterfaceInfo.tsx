import React from 'react';
import { abbreviate } from '../../../utils/StringUtils';
import { InterfaceData } from './entities/InterfaceData';



interface Props {
    interfaceItems: InterfaceData[],
    keyMaxDisplaySize?: number,
    valueMaxDisplaySize?: number
};

const DEFAULT_KEY_MAX_DISPLAY_SIZE: number = 30;
const DEFAULT_VALUE_MAX_DISPLAY_SIZE: number = 140;


export const InterfaceInfo: React.StatelessComponent<Props> = ({ interfaceItems, keyMaxDisplaySize, valueMaxDisplaySize }) => {

    const body = interfaceItems.map(
        interfaceItem =>
            <tr key={interfaceItem.name}>
                <td title={interfaceItem.description}>{abbreviate(interfaceItem.name, keyMaxDisplaySize ? keyMaxDisplaySize : DEFAULT_KEY_MAX_DISPLAY_SIZE)}</td>
                <td title={interfaceItem.url}>
                    <a href={interfaceItem.url} target="_blank" rel="noopener">
                        {abbreviate(interfaceItem.url, valueMaxDisplaySize ? valueMaxDisplaySize : DEFAULT_VALUE_MAX_DISPLAY_SIZE)}
                    </a>
                </td>
            </tr>
    )

    return (
        <table className="w3-table-all">
            <thead>
                <tr className="w3-light-grey">
                    <th>Name</th>
                    <th>URL</th>
                </tr>
            </thead>
            <tbody>
                {body}
            </tbody>
        </table>
    );
}