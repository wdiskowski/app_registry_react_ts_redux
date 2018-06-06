import React from 'react';
import { abbreviate } from '../../utils/StringUtils';
import { MapEntry } from './entities/MapEntry';

interface Props {
    mapEntries: Array<MapEntry<string>>,
    keyMaxDisplaySize?: number,
    valueMaxDisplaySize?: number
};

interface State {
    mapEntries: Array<MapEntry<string>>,
    keyMaxDisplaySize: number,
    valueMaxDisplaySize: number
}

const DEFAULT_KEY_MAX_DISPLAY_SIZE: number = 30;
const DEFAULT_VALUE_MAX_DISPLAY_SIZE: number = 140;

export default class ConfigInfo extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);
        this.state = {
            mapEntries: [],
            keyMaxDisplaySize: props.keyMaxDisplaySize ? props.keyMaxDisplaySize : DEFAULT_KEY_MAX_DISPLAY_SIZE,
            valueMaxDisplaySize: props.valueMaxDisplaySize ? props.valueMaxDisplaySize : DEFAULT_VALUE_MAX_DISPLAY_SIZE
        }
    }

    render() {

        const body = this.state.mapEntries.map(
            mapEntry =>
                <tr key={mapEntry.key}>
                    <td title={mapEntry.key}>{abbreviate(mapEntry.key, this.state.keyMaxDisplaySize)}</td>
                    <td title={mapEntry.value}>{abbreviate(mapEntry.value, this.state.valueMaxDisplaySize)}</td>
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

    componentDidMount() {
        if (this.state.mapEntries !== this.props.mapEntries) {
            this.setState({ mapEntries: this.props.mapEntries })
        }
    }

    componentDidUpdate() {
        if (this.state.mapEntries !== this.props.mapEntries) {
            this.setState({ mapEntries: this.props.mapEntries })
        }
    }

}