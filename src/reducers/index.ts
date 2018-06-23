import { combineReducers } from 'redux';
import { Application } from '../entities/Application';
import { Target } from '../entities/Target';
import { RegistryCollection } from '../entities/RegistryCollection';
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
    registryCollection: RegistryCollection | null;
};

export const state = combineReducers<State>({
    apps: applicationsReducer,
    activeApp: applicationReducer,
    activeTarget: targetReducer,
    activeRegistry: registryReducer,
    registryCollection: registriesReducer
});