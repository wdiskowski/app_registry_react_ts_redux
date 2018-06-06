
export type FetchMockData = (url: string) => any;

export function findReleaseInfoDataMock(url: string, onSuccess: FetchCallback, fetchMock: FetchMockData) {
    new Promise(
        (resolve, reject) =>
            window.setTimeout(
                () => resolve(fetchMock(url))
                , Math.random() * 2000 + 1000)
    ).then(data => onSuccess(data));
}





