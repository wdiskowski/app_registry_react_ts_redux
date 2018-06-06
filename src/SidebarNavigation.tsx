import React from "react";
import { Link } from 'react-router-dom'
import { findApplications } from './services/applicationService';
import { Application } from "./entities/Application";

interface Props {
    sideWidth: number
};

interface State {
    apps: Application[];
    activeApp: string,
    activeTarget: string,
    sideWidth: number
}
export default class SidebarNavigation extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            apps: [],
            activeApp: '',
            activeTarget: '',
            sideWidth: props.sideWidth
        }
    }
    
    render() {
        const body = this.state.apps.map(
            app =>
            <span key={app.name}>
            <button className={`w3-button w3-block w3-left-align ${app.name === this.state.activeApp ? 'w3-gray' : ''}`}
                onClick={() => this.setState({ activeApp: app.name })}>
                {app.name}
                {app.targets && !!app.targets.length &&
                    <span className={`ui-accordion-header-icon ui-icon ${app.name === this.state.activeApp ?
                        'ui-icon-triangle-1-s' : 'ui-icon-triangle-1-e'}`} />
                }
            </button>

            {app.name === this.state.activeApp && app.targets && app.targets.map(
                target =>
                    <Link key={`/${app.name}/${target.name}`} to={`/ApplicationRegistryWeb/secure/${app.name}/${target.name}`}
                        className={`w3-bar-item w3-button ${target.name === this.state.activeTarget ?
                            'w3-light-blue' : 'w3-white'}`}
                        onClick={() => this.setState({ activeTarget: target.name })}
                    >{target.name}
                    </Link>
            )

            }
        </span>
        );
        return (
            <div className="w3-sidebar w3-bar-block w3-light-grey w3-card" style={{ width: this.state.sideWidth }}>
                {body}
            </div>
        )
    }


    componentDidMount() {
        this.loadConfigData();
    }

    loadConfigData() {
        findApplications(apps => this.setState({ apps }));
    }
}

