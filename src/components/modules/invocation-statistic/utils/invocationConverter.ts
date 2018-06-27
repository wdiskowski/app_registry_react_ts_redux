import { InvocationStatisticData } from "../entities/InvocationStatisticData";
import { NamedInvocationStatistic } from "../entities/NamedInvocationStatistic";


export function convert(input: InvocationStatisticData[] | NamedInvocationStatistic[] | null): NamedInvocationStatistic[] {
    if (isInvocationStatisticDataArray(input)) {
        return [{ name: 'Invocation Statistic', invocationData: input }];
    } else if (isNamedInvocationStatisticArray(input)) {
        return input;
    } else {
        return [];
    }
}

function isInvocationStatisticDataArray(data: InvocationStatisticData[] | NamedInvocationStatistic[] | null): data is InvocationStatisticData[] {
    return Array.isArray(data) && !!data.length && 'methodName' in data[0];
}

function isNamedInvocationStatisticArray(data: NamedInvocationStatistic[] | null): data is NamedInvocationStatistic[] {
    return Array.isArray(data);
}

