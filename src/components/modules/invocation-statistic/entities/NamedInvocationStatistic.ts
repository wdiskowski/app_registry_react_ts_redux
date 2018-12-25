import { InvocationStatisticData } from "./InvocationStatisticData";
import { NamedData } from "../../../../entities/NamedData";

export interface NamedInvocationStatistic extends NamedData {
    data: InvocationStatisticData[]
}