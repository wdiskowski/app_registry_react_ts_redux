import { fetchSlowestMock, fetchExceptionalMock } from "./invocationStatisticMock";
import { fetchData } from "../../services/fetch/fetchService"
import { InvocationStatisticData } from "./entities/InvocationStatisticData";

export function findSlowest(url: string, onSuccess: (json: InvocationStatisticData[]) => void) {
    fetchData(url, onSuccess, fetchSlowestMock)
}

export function findExceptional(url: string, onSuccess: (json: InvocationStatisticData[]) => void) {
    fetchData(url, onSuccess, fetchExceptionalMock)
}



