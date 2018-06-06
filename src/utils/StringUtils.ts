export function abbreviate(str: string, len: number): string {
    let abbreviated = str;
    if(str) {
        if(str.length > len) {
            if(len > 3) {
                abbreviated = str.substring(0, len) + "...";
            } else {
                abbreviated = str.substring(0, len);
            }
        }
    } else {
        abbreviated = '';
    }
    return abbreviated;
}