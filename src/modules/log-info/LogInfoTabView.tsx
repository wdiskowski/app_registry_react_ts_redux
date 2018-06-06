import { findLogInfoData } from './logInfoService';
import AbstractMapTabView from '../common/AbstractMapTabView';
import { NamedMap } from '../common/entities/NamedMap';
import { MapEntry } from "../common/entities/MapEntry";

export default class LogInfoTabView extends AbstractMapTabView {
    findData(url: string, onSuccess: (json: Array<MapEntry<string>> | NamedMap | NamedMap[]) => void): void {
        findLogInfoData(url, onSuccess);
    }
}