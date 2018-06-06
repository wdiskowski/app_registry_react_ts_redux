import { InvocationStatisticData } from "./entities/InvocationStatisticData";

const slowestData: InvocationStatisticData[] =
    [
        {
            methodName: "public void de.deltalloyd.mev.fran.orchestration.suche.FranPartnerDialogSucheService.aktualisierePartnerModelDaten(de.deltalloyd.mev.fran.model.FranPartnerViewModel) throws de.deltalloyd.mev.exception.MevApplicationException",
            recentDuration: 230,
            averageDuration: 740,
            maxDuration: 1411,
            numberOfExceptions: 1,
            numberOfInvocations: 3,
            exception: "de.deltalloyd.mev.exception.MevPartnerNichtGefundenException: Partnerdaten für PID: 3811773 nicht gefunden.",
            lastInvocationTimestamp: 1515073556381
        },
        {
            methodName: "public java.util.List<de.deltalloyd.mev.model.DialogMitPartnerDto<T>> de.deltalloyd.mev.service.AbstractVertragsDialogService.findTasksByMandantSignalBinaryAndJahresRange(java.lang.Integer,org.apache.commons.lang3.Range<java.lang.Integer>,java.lang.Integer)",
            recentDuration: 291,
            averageDuration: 332,
            maxDuration: 942,
            numberOfExceptions: 0,
            numberOfInvocations: 5,
            lastInvocationTimestamp: 1515081488909
        }
    ];

const exceptionalData: InvocationStatisticData[] =
    [
        {
            methodName: "public void de.deltalloyd.mev.fran.orchestration.suche.FranPartnerDialogSucheService.aktualisierePartnerModelDaten(de.deltalloyd.mev.fran.model.FranPartnerViewModel) throws de.deltalloyd.mev.exception.MevApplicationException",
            recentDuration: 230,
            averageDuration: 740,
            maxDuration: 1411,
            numberOfExceptions: 1,
            numberOfInvocations: 3,
            exception: "de.deltalloyd.mev.exception.MevPartnerNichtGefundenException: Partnerdaten für PID: 3811773 nicht gefunden.",
            lastInvocationTimestamp: 1515073556381
        }
    ];


export function fetchSlowestMock(url: string): InvocationStatisticData[] {
    return slowestData;
}
export function fetchExceptionalMock(url: string): InvocationStatisticData[] {
    return exceptionalData;
}




