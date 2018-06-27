import { InvocationStatisticData } from "./InvocationStatisticData";
import { NamedData } from "../../common/entities/NamedData";

export interface NamedInvocationStatistic extends NamedData {
    invocationData: InvocationStatisticData[]
}