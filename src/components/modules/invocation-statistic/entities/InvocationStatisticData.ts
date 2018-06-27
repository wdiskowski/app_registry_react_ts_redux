export interface InvocationStatisticData {
    methodName: string,
    recentDuration: number,
    averageDuration: number,
    maxDuration: number,
    numberOfExceptions: number,
    numberOfInvocations: number,
    exception?: string,
    lastInvocationTimestamp: number
}