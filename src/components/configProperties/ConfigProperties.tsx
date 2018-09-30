import React from "react";

interface Props {
    fetchConfigProperties: () => void
};

export class ConfigProperties extends React.Component<Props, {}> {

    public componentDidMount() {
        this.props.fetchConfigProperties();
    }

    public render() {
        return null;
    }
}