import React from "react";
import { InvocationStatistic } from './InvocationStatistic';
import { NamedInvocationStatistic } from "./entities/NamedInvocationStatistic";
import { AbstractMultidataExposure } from "../common/AbstractMultidataExposure";

export class InvocationStatistics extends AbstractMultidataExposure<NamedInvocationStatistic> {

    protected createDataComponent(data: NamedInvocationStatistic | null): JSX.Element {
        return <InvocationStatistic invocations={data ? data.invocationData : []} />;
    }
}