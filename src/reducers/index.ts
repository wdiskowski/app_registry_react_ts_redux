import { combineReducers } from 'redux';
import { Application } from '../entities/Application';
import { Target } from '../entities/Target';
import { applicationReducer } from './application';
import { applicationsReducer } from './applications';
import { targetReducer } from './target';

export interface State {
    apps: Application[];
    activeApp: Application | null;
    activeTarget: Target | null;
};

export const state = combineReducers<State>({
    apps: applicationsReducer,
    activeApp: applicationReducer,
    activeTarget: targetReducer,
});