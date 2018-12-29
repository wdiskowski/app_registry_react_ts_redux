import React from "react";
import { MapComparison } from './MapComparison';
import { NamedMap } from "../../../../entities/NamedMap";
import { mergeMaps } from './utils/comparisonDataSynchronizer';
import { AbstractMultidataComparison } from "./AbstractMultidataComparison";
import { Target } from '../../../../entities/Target';
import { MapEntry } from '../../../../entities/MapEntry';


export class MapsComparison extends AbstractMultidataComparison<NamedMap> {

    protected createDataComponent(activeTargetName: string,
        comparisonTargetName: string,
        comparisonTargetSelected: (target: Target) => void, 
        namedData: NamedMap | null, comparisonData?: NamedMap | null): JSX.Element {
            const mapEntries: Array<MapEntry<Array<string | null>>> = mergeMaps(namedData, comparisonData || null);

        return <MapComparison  activeTargetName={activeTargetName}
            comparisonTargetName={comparisonTargetName}
            comparisonTargetSelected={comparisonTargetSelected}
            mapEntries={mapEntries} />;
    }
}