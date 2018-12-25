import { MapEntry } from "../../../../entities/MapEntry";
import { NamedMap } from "../../../../entities/NamedMap";
import { Config } from "../entities/Config";

const configInfoData: Array<MapEntry<string>> =
    [
        { key: "SERVICE_PASSWORD", value: "***af9" },
        { key: "IMS_WSDL", value: "http://ims.ad49.dir/ExterneService/WebService?wsdl" },
        { key: "isDebug", value: "true" },
        { key: "Ebene", value: "DEV" },
        { key: "SERVICE_USER", value: "batch-user" }
    ];
const configInfoData2: Array<MapEntry<string>> =
    [
        { key: "SERVICE_PASSWORD", value: "***af9" },
        { key: "IMS_WSDL", value: "http://ims.ad49.dir/ExterneService/WebService?wsdl" },
        { key: "isDebug", value: "false" },
        { key: "logo", value: "logo.gif" },
        { key: "SERVICE_USER", value: "batch-user" }
    ];
const configInfoData3: Array<MapEntry<string>> =
    [
        { key: "SERVICE_PASSWORD", value: "***af9" },
        { key: "IMS_WSDL", value: "http://ims.ad49.dir/ExterneService/WebService?wsdl" },
        { key: "isDebug", value: "false" },
        { key: "Ebene", value: "INT" },
        { key: "SERVICE_USER", value: "batch-user" }
    ];


const configInfoMultiData: NamedMap[] =
    [
        {
            name: "MEV",
            data: [
                { key: "SERVICE_PASSWORD", value: "***me9" },
                { key: "MEV_WSDL", value: "http://mev.ad49.dir/ExterneService/WebService?wsdl" }
            ]
        },
        {
            name: "PDB",
            data: [
                { key: "Ebene", value: "DEV" },
                { key: "SERVICE_PASSWORD", value: "***pd9" },
                { key: "isDebug", value: "true" },
                { key: "PDB_WSDL", value: "http://pdb.ad49.dir/ExterneService/WebService?wsdl" }
            ]
        }

    ];

const configInfoMultiData2: Config[] =
    [
        {
            name: "WFS",
            configInfoData: [
                { key: "SERVICE_PASSWORD", value: "***me9" },
                { key: "WFS_WSDL", value: "http://wfs.ad49.dir/ExterneService/WebService?wsdl" }
            ]
        },
        {
            name: "PDB",
            configInfoData: [
                { key: "SERVICE_PASSWORD", value: "***pd9" },
                { key: "Ebene", value: "INT" },
                { key: "PDB_WSDL", value: "http://pdb.ad49.dir/ExterneService/WebService?wsdl" }
            ]
        }

    ];

const configInfoMultiData3: Config[] =
    [
        {
            name: "WFS",
            configInfoData: [
                { key: "SERVICE_PASSWORD", value: "***me9" },
                { key: "isDebug", value: "true" },
                { key: "WFS_WSDL", value: "http://wfs.ad49.dir/ExterneService/WebService?wsdl" }
            ]
        },
        {
            name: "PDB",
            configInfoData: [
                { key: "SERVICE_PASSWORD", value: "***pd9" },
                { key: "isDebug", value: "false" },
                { key: "PDB_WSDL", value: "http://pdb.ad49.dir/ExterneService/WebService?wsdl" }
            ]
        }

    ];

export const fetchMockData = (url: string): Array<MapEntry<string>> | NamedMap | NamedMap[] | Config | Config[] | null => {
    if(url.indexOf("ex091vm") > -1) {return configInfoData;}
    if(url.indexOf("ex092vm") > -1) {return configInfoData2;}
    if(url.indexOf("ex093vm") > -1) {return configInfoData3;}
    if(url.indexOf("tx092vm") > -1) {return configInfoMultiData;}
    if(url.indexOf("wx092vm") > -1) {return configInfoMultiData2;}
    return configInfoMultiData3;
}



