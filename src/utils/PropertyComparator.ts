export function compareTo(left: any, right: any, property: string): number {
    let comparisonResult = 0;
    if (left == null) {
        comparisonResult = right != null ? -1 : 0;
    } else if (right == null) {
        comparisonResult = 1;
    } else if (left[property] == null) {
        comparisonResult = right[property] != null ? -1 : 0;
    } else if (right[property] == null) {
        comparisonResult = 1
    } else {
        let leftValue = left[property].toString().toLowerCase();
        let rightValue = right[property].toString().toLowerCase();
        if (typeof left[property] === "number" && typeof right[property] === "number") {
            leftValue = left[property];
            rightValue = right[property];
        }
        comparisonResult = leftValue > rightValue ? 1 : (rightValue > leftValue ? -1 : 0);
    }
    return comparisonResult;
}