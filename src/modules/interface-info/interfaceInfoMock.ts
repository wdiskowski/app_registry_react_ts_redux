import { InterfaceData } from "./entities/InerfaceData";
import { NamedInterface } from "./entities/NamedInterface";

const interfaceInfoData: InterfaceData[] =
    [
        {
            name: "AdamSoapFacadeBean", url: "http://wp7005.ad49.dir:8080/AdamSoapFacadeBean/AdamSoapFacadeBean?wsdl",
            description: "Zugriff auf Document Management System"
        },
        {
            name: "AdamMonitoringWebService", url: "http://wp7005.ad49.dir:8080/AdamMonitoringWebService/AdamMonitoringWebService?wsdl",
            description: "SOAP Schnittstelle f\u00fcr die Application Availability Monitoring"
        }
    ];

const interfaceInfoMultiData: NamedInterface[] =

    [
        {
            name: "ADAM",
            interfaceInfoData: [
                {
                    name: "AdamSoapFacadeBean", url: "http://wp7005.ad49.dir:8080/AdamSoapFacadeBean/AdamSoapFacadeBean?wsdl",
                    description: "Zugriff auf Document Management System"
                },
                {
                    name: "AdamMonitoringWebService", url: "http://wp7005.ad49.dir:8080/AdamMonitoringWebService/AdamMonitoringWebService?wsdl",
                    description: "SOAP Schnittstelle f\u00fcr die Application Availability Monitoring"
                }
            ]
        },
        {
            name: "MEV",
            interfaceInfoData: [
                {
                    name: "MevServiceBean", url: "http://wp7005.ad49.dir:8080/MevServiceBean/MevServiceBean?wsdl",
                    description: "Zugriff auf MEV System"
                }
            ]
        }
    ];

export function fetchInterfaceInfoMock(url: string): NamedInterface[] | InterfaceData[] {
    return url.indexOf("ex092vm") > -1 ? interfaceInfoData : interfaceInfoMultiData;
}




