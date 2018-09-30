export function arrayFind<T>(array: T[], predicate: (t: T) => boolean): T | undefined {
    if (array == null) {
        throw new TypeError('"this" is null or not defined');
    }
    for(const entry of array) {
        if(predicate(entry)) {
           return entry;
        }
    }
    return undefined;
}