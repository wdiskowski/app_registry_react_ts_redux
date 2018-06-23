import { MapEntry } from "../../common/entities/MapEntry";
import { NamedMap } from "../../common/entities/NamedMap";
import { Config } from "../entities/Config";

const configInfoData: Array<MapEntry<string>> =
    [
        { key: "SERVICE_PASSWORD", value: "***af9" },
        { key: "IMS_WSDL", value: "http://ims.ad49.dir/ExterneService/WebService?wsdl" },
        { key: "isDebug", value: "false" },
        { key: "SERVICE_USER", value: "batch-user" }
    ];

const configInfoMultiData: NamedMap[] =
    [
        {
            name: "MEV",
            mapData: [
                { key: "SERVICE_PASSWORD", value: "***me9" },
                { key: "MEV_WSDL", value: "http://mev.ad49.dir/ExterneService/WebService?wsdl" }
            ]
        },
        {
            name: "PDB",
            mapData: [
                { key: "SERVICE_PASSWORD", value: "***pd9" },
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
                { key: "PDB_WSDL", value: "http://pdb.ad49.dir/ExterneService/WebService?wsdl" }
            ]
        }

    ];

export const fetchMockData = (url: string): Array<MapEntry<string>> | NamedMap | NamedMap[] | Config | Config[] | null => {
    return url.indexOf("ex092vm") > -1 ? configInfoData : (url.indexOf("tx092vm") > -1 ? configInfoMultiData2 : configInfoMultiData);
}



