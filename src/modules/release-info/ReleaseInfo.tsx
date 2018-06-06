import * as React from 'react';
import { Release } from "./entities/Release";
import dateformat from 'dateformat';

interface Props {
    releaseInfoData?: Release;
};

interface State {
    releaseInfoData?: Release;
}

export default class ReleaseInfo extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            releaseInfoData: this.props.releaseInfoData
        }
    }

    render() {

        return (
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
                        <td>{this.state.releaseInfoData ? this.state.releaseInfoData.projekt : null}</td>
                    </tr>
                    <tr>
                        <td>version</td>
                        <td>{this.state.releaseInfoData ? this.state.releaseInfoData.version : null}</td>
                    </tr>
                    <tr>
                        <td>buildDate</td>
                        <td>{this.state.releaseInfoData && this.state.releaseInfoData.buildDate ? dateformat(this.state.releaseInfoData.buildDate, 'dd.mm.yyyy hh:MM:ss') : null}
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }

    
    componentDidMount() {
        if(this.state.releaseInfoData !== this.props.releaseInfoData) {
            this.setState({releaseInfoData: this.props.releaseInfoData})
        }
    }

    componentDidUpdate() {
        if(this.state.releaseInfoData !== this.props.releaseInfoData) {
            this.setState({releaseInfoData: this.props.releaseInfoData})
        }
    }
   
}