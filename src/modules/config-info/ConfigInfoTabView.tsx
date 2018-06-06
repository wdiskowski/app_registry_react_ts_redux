import { findConfigInfoData } from './configInfoService';
import AbstractMapTabView from '../common/AbstractMapTabView';
import { NamedMap } from '../common/entities/NamedMap';
import { MapEntry } from "../common/entities/MapEntry";

export default class ConfigInfoTabView extends AbstractMapTabView {
    findData(url: string, onSuccess: (json: Array<MapEntry<string>> | NamedMap | NamedMap[]) => void): void {
        findConfigInfoData(url, onSuccess);
    }
}