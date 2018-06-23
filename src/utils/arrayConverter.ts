export const convertToArray = <T>(input: T[] | T | null): T[] => {
    if (!input) {
        return [];
    } else if (isArray(input)) {
        return input;
    } else {
        return new Array(input);
    }
}

function isArray<T>(data: T[] | T): data is T[] {
    return Array.isArray(data);
}


