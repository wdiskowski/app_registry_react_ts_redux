import React from "react";
import { Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';
import { createBrowserHistory as createHistory } from 'history'
import { ApplicationsContainer } from './components/applications';
import { RegistriesContainer } from './components/registries';

import './resources/css/index.css';
import './resources/css/w3.css';



const history = createHistory();
const SIDEBAR_WIDTH: number = 160;

export const AppRouter: React.StatelessComponent<{}> = () => {
        return (
                <Provider store={store}>
                        <Router history={history}>
                                <>
                                        <Route path="/" render={() => <ApplicationsContainer sideWidth={SIDEBAR_WIDTH} />} />
                                        <Route path="/ApplicationsRegistryWeb/secure/:appId/:targetId" render={() =>
                                                <RegistriesContainer sideWidth={SIDEBAR_WIDTH} />} />
                                </>
                        </Router>
                </Provider>
        )
}

