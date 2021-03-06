import { MapEntry } from "../../../../entities/MapEntry";
import { NamedMap } from "../../../../entities/NamedMap";
import { Release } from "../entities/Release";

const releaseInfoData: Release =
    {
        projekt: "WFS.ADAM",
        buildDate: new Date("2017-12-22T08:36:57Z"),
        version: "WFS.ADAM-1.0.0-SNAPSHOT"
    };

const releaseInfoMultiData: Release[] =
    [
        {
            projekt: "WFS.ADAM",
            buildDate: new Date("2017-12-22T08:36:57Z"),
            version: "WFS.ADAM-1.0.0-SNAPSHOT"
        },
        {
            projekt: "WFS.PUB.PUB-gui",
            buildDate: new Date("2018-02-08T08:22:15Z"),
            version: "WFS.PUB.PUB-gui-1.0-SNAPSHOT"
        }


    ];

export const fetchMockData = (url: string): Array<MapEntry<string>> | NamedMap | NamedMap[] | Release | Release[] | null => {
    return url.indexOf("ex092vm") > -1 ? releaseInfoData : releaseInfoMultiData;
}




