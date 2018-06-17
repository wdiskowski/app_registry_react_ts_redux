
export const fetchMockData = <T>(url: string, fetchMock: (url: string)=> T) : Promise<T>  => {
    return new Promise(
        (resolve, reject) =>
            window.setTimeout(
                () => resolve(fetchMock(url))
                , Math.random() * 2000 + 1000)
    );
}






