export function isJson(input: string): boolean {
    try {
        JSON.parse(input);
    } catch (e) {
        return false;
    }
    return true;
}