import * as React from 'react';
import { InterfaceData } from "./entities/InerfaceData";
import { abbreviate } from '../../utils/StringUtils';

interface Props {
    interfaceData: InterfaceData[];
};

interface State {
    interfaceData: InterfaceData[];
}

export default class InterfaceInfo extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            interfaceData: this.props.interfaceData
        }
    }

    render() {

        const body = this.state.interfaceData.map(
            interfaceItem =>
                <tr key={interfaceItem.name}>
                    <td title={interfaceItem.description}>{abbreviate(interfaceItem.name, 30)}</td>
                    <td title={interfaceItem.url}>{abbreviate(interfaceItem.url, 140)}</td>
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

    componentDidMount() {
        if (this.state.interfaceData !== this.props.interfaceData) {
            this.setState({ interfaceData: this.props.interfaceData })
        }
    }

    componentDidUpdate() {
        if (this.state.interfaceData !== this.props.interfaceData) {
            this.setState({ interfaceData: this.props.interfaceData })
        }
    }
}