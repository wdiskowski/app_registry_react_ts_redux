import { combineReducers } from 'redux';
import { Application } from '../entities/Application';
import { MapEntry } from '../entities/MapEntry';
import { Target } from '../entities/Target';
import { Registry } from '../entities/Registry';
import { applicationReducer } from './application';
import { applicationsReducer } from './applications';
import { targetReducer } from './target';
import { registryReducer } from './registry';
import { registriesReducer } from './registries';


export interface State {
    apps: Application[];
    activeApp: Application | null;
    activeTarget: Target | null;
    activeRegistry: Registry | null;
    registryCollection: Array<MapEntry<string>>;
};

export const state = combineReducers<State>({
    apps: applicationsReducer,
    activeApp: applicationReducer,
    activeTarget: targetReducer,
    activeRegistry: registryReducer,
    registryCollection: registriesReducer
});