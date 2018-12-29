import React from "react";
import { MapExposure } from './MapExposure';
import { NamedMap } from "../../../../entities/NamedMap";
import { sort } from '../../../../utils/PropertySorter';
import { AbstractMultidataExposure } from "./AbstractMultidataExposure";
import { Target } from '../../../../entities/Target';


export class MapsExposure extends AbstractMultidataExposure<NamedMap> {

    protected createDataComponent(namedData: NamedMap | null, comparisonTargetSelected?: (target: Target) => void): JSX.Element {
        return <MapExposure mapEntries={namedData ? sort(namedData.data, 'key') : []} 
            comparisonTargetSelected={comparisonTargetSelected} />;
    }
}