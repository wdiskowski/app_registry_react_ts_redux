import { MapEntry } from "../../../../entities/MapEntry";
import { NamedMap } from "../../../../entities/NamedMap";
import { Log } from "../entities/Log";

const logInfoData: Array<MapEntry<string>> =
    [
        { key: "JPA_LOG", value: "/var/opt/sun/glassfish/gf-inst1/log/mev/jpa.log" },
        { key: "WEB_SERVICE_CLIENT_LOG", value: "/var/opt/sun/glassfish/gf-inst1/log/mev/ws.client.log" },
        { key: "WEB_SERVICE_SERVER_LOG", value: "/var/opt/sun/glassfish/gf-inst1/log/mev/ws.server.log" },
        { key: "DEV_LOG", value: "/var/opt/sun/glassfish/gf-inst1/log/mev/dev.log" }
    ];


const logInfoMultiData: Log[] =
    [
        {
            name: "MEV",
            logInfoData: [
                { key: "JPA_LOG", value: "/var/opt/sun/glassfish/gf-inst1/log/mev/jpa.log" },
                { key: "WEB_SERVICE_CLIENT_LOG", value: "/var/opt/sun/glassfish/gf-inst1/log/mev/ws.client.log" },
                { key: "WEB_SERVICE_SERVER_LOG", value: "/var/opt/sun/glassfish/gf-inst1/log/mev/ws.server.log" },
                { key: "DEV_LOG", value: "/var/opt/sun/glassfish/gf-inst1/log/mev/dev.log" }
            ]
        },
        {
            name: "ADAM",
            logInfoData: [
                { key: "JPA_LOG", value: "/var/opt/sun/glassfish/gf-inst1/log/adam/jpa.log" },
                { key: "DEV_LOG", value: "/var/opt/sun/glassfish/gf-inst1/log/adam/adam_dev.log" }
            ]
        }
    ];

export const fetchMockData = (url: string): Array<MapEntry<string>> | NamedMap | NamedMap[] | Log | Log[] | null => {
    return url.indexOf("ex092vm") > -1 ? logInfoData : logInfoMultiData;
}



