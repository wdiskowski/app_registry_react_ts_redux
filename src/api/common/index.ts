import { fetchMockData } from "./mockData";

const headers: HeadersInit = { "Content-Type": "application/json" };

const credentials: RequestCredentials = 'include';

const requestInit: RequestInit = { headers, credentials };


const fetchData = <T>(url: string, fetchMock: (url: string) => T): Promise<T> => {
    if (process.env.NODE_ENV !== "production") {
        return fetchMockData(url, fetchMock);
    } else {
        return fetch(url, requestInit)
            .then(resp => resp.json() as Promise<T>);
    }
}

export const commonAPI = {
    fetchData
}



