import React from "react";
import { InvocationStatistic } from './InvocationStatistic';
import { NamedInvocationStatistic } from "./entities/NamedInvocationStatistic";
import { AbstractMultidataExposure } from "../common/data-exposure/AbstractMultidataExposure";

export class InvocationStatistics extends AbstractMultidataExposure<NamedInvocationStatistic> {

    protected createDataComponent(namedData: NamedInvocationStatistic | null): JSX.Element {
        return <InvocationStatistic invocations={namedData ? namedData.data : []} />;
    }
}