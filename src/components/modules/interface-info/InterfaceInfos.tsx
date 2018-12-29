import React from "react";
import { InterfaceInfo } from './InterfaceInfo';
import { NamedInterface } from "./entities/NamedInterface";
import { sort } from '../../../utils/PropertySorter';
import { AbstractMultidataExposure } from "../common/data-exposure/AbstractMultidataExposure";

export class InterfaceInfos extends AbstractMultidataExposure<NamedInterface> {

    protected createDataComponent(data: NamedInterface | null): JSX.Element {

        return <InterfaceInfo interfaceItems={data ? sort(data.interfaceInfoData, 'name') : []} />;
    }
}