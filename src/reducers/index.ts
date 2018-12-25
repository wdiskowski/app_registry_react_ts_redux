import { combineReducers } from 'redux';
import { Application } from '../entities/Application';
import { MapEntry } from '../entities/MapEntry';
import { Target } from '../entities/Target';
import { Registry } from '../entities/Registry';
import { applicationReducer } from './application';
import { applicationsReducer } from './applications';
import { targetReducer, comparisonTargetReducer } from './target';
import { registryReducer } from './registry';
import { registriesReducer } from './registries';
import { configPropertiesReducer } from './configProperties';
import { NamedData } from '../entities/NamedData';


export interface State {
    apps: Application[];
    activeApp: Application | null;
    activeTarget: Target | null;
    comparisonTarget: Target | null;
    activeRegistry: Registry<NamedData> | null;
    registryCollection: Array<MapEntry<string>>;
    configProperties: Array<MapEntry<string>>;
};

export const state = combineReducers<State>({
    apps: applicationsReducer,
    activeApp: applicationReducer,
    activeTarget: targetReducer,
    comparisonTarget: comparisonTargetReducer,
    activeRegistry: registryReducer,
    registryCollection: registriesReducer,
    configProperties: configPropertiesReducer
});