import React from "react";
import { Application } from "../../entities/Application";



interface Props {
    interval_seconds: number,
    apps: Application[],
    pingApps: (apps: Application[]) => void
};

export class PingApplications extends React.Component<Props, {}> {

    private timer: number | null;

    public componentDidUpdate() {
        if (this.props.apps) {
            if (this.timer) {
                clearInterval(this.timer);
            }
            if (this.props.interval_seconds) {
                this.timer = window.setInterval(
                    () => this.props.pingApps(this.props.apps)
                    , this.props.interval_seconds * 1000)
            }
        }
    }

    public componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    public render() {
        return null;
    }
}