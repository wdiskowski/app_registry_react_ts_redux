import React from "react";
import { MapExposure } from './MapExposure';
import { NamedMap } from "./entities/NamedMap";
import { sort } from '../../../utils/PropertySorter';
import { AbstractMultidataExposure } from "./AbstractMultidataExposure";


export class MapsExposure extends AbstractMultidataExposure<NamedMap> {

    protected createDataComponent(data: NamedMap | null): JSX.Element {
        return <MapExposure mapEntries={data ? sort(data.mapData, 'key') : []} />;
    }
 }