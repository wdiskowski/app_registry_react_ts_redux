export interface Registry<T> {
    index: number,
    data: T[],
    comparisonData?: T[]
}