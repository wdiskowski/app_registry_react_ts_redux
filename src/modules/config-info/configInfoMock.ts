import { MapEntry } from "../common/entities/MapEntry";
import { NamedMap } from "../common/entities/NamedMap";
import { Config } from "./entities/Config";
import { convert } from "./configConverter";

const configInfoData: Array<MapEntry<string>> =
    [
        { key: "SERVICE_PASSWORD", value: "***af9" },
        { key: "IMS_WSDL", value: "http://ims.ad49.dir/ExterneService/WebService?wsdl" },
        { key: "isDebug", value: "false" },
        { key: "SERVICE_USER", value: "batch-user" }
    ];

const configInfoMultiData: Config[] =
    [
        {
            name: "MEV",
            configInfoData: [
                { key: "SERVICE_PASSWORD", value: "***me9" },
                { key: "MEV_WSDL", value: "http://mev.ad49.dir/ExterneService/WebService?wsdl" }
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


export function fetchConfigInfoMock(url: string): Array<MapEntry<string>> | NamedMap | NamedMap[] {
    return convert(url.indexOf("ex092vm") > -1 ? configInfoData : configInfoMultiData);
}




