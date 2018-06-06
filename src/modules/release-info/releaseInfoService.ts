import { fetchReleaseInfoMock } from "./releaseInfoMock";
import { fetchData } from "../../services/fetch/fetchService"
import { Release } from "./entities/Release";

export function findReleaseInfoData(url: string, onSuccess: (json: Release | Release[]) => void) {
    fetchData(url, onSuccess, fetchReleaseInfoMock)
}





