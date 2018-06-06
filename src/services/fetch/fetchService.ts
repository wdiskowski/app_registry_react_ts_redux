import { findReleaseInfoDataMock, FetchMockData } from "./fetchServiceMock";

const headers: HeadersInit = { "Content-Type": "application/json" };

const credentials: RequestCredentials = 'include';

const requestInit: RequestInit = { headers, credentials };


export function fetchData(url: string, onSuccess: FetchCallback, fetchMock: FetchMockData) {
    if (process.env.NODE_ENV !== "production") {
        findReleaseInfoDataMock(url, onSuccess, fetchMock);
    } else {
        fetch(url, requestInit)
            .then(resp => resp.json())
            .then(json => onSuccess(json));
    }
}





