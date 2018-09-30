import React from "react";
import { ApplicationRow } from './ApplicationRow'
import { Application } from "../../entities/Application";
import { Target } from "../../entities/Target";

interface Props {
    sideWidth: number,
    apps: Application[],
    activeApp: Application | null,
    activeTarget: Target | null,
    appSelected: (app: Application) => void,
    targetSelected: (target: Target) => void,
    fetchApps: () => void
};

export class Applications extends React.Component<Props, {}> {

    public componentDidMount() {
        this.props.fetchApps();
    }

    public render() {
        return (
            <div className="w3-sidebar w3-bar-block w3-light-grey w3-card" style={{ width: this.props.sideWidth }}>
                {
                    this.props.apps.map(app =>
                        <ApplicationRow key={app.name} app={app} appSelected={this.props.appSelected} targetSelected={this.props.targetSelected} activeApp={this.props.activeApp} activeTarget={this.props.activeTarget} />
                    )
                }
            </div>
        )
    }
}