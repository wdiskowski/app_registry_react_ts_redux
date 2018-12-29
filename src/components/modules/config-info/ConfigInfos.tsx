import React from "react";
import { Target } from "../../../entities/Target";
import { Registry } from "../../../entities/Registry";
import { NamedData } from "../../../entities/NamedData";
import { MapsExposure } from "../common/data-exposure/MapsExposure";
import { MapsComparison } from "../common/data-comparison/MapsComparison";

interface Props {
    activeTarget: Target,
    comparisonTarget: Target,
    registryUrl: string,
    activeRegistry: Registry<NamedData>,
    fetchData: (target: Target, registryUrl: string) => void,
    fetchComparisonData: (target: Target, registryUrl: string) => void,
    comparisonTargetSelected: (target: Target) => void | undefined
};
export class ConfigInfos extends React.Component<Props, {}> {

    render() {

        return (
            this.props.comparisonTarget ?
                <MapsComparison activeRegistry={this.props.activeRegistry}
                    activeTargetName={this.props.activeTarget.name}
                    comparisonTarget={this.props.comparisonTarget}
                    comparisonTargetSelected={this.props.comparisonTargetSelected}
                    fetchComparisonData={this.props.fetchComparisonData}
                    registryUrl={this.props.registryUrl} /> :
                <MapsExposure activeRegistry={this.props.activeRegistry}
                    activeTarget={this.props.activeTarget}
                    comparisonTargetSelected={this.props.comparisonTargetSelected}
                    fetchData={this.props.fetchData}
                    registryUrl={this.props.registryUrl} />
        );
    }
}