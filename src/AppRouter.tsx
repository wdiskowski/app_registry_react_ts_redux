import React from "react";
import { Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';
import { createBrowserHistory as createHistory } from 'history'
import { ApplicationsContainer } from './components/applications';
import { RegistriesContainer } from './components/registries';
import { ConfigPropertiesContainer } from './components/configProperties';
import { PingApplicationsContainer } from './components/pingApplications';

import './resources/css/index.css';
import './resources/css/w3.css';



const history = createHistory();

export const AppRouter: React.StatelessComponent<{}> = () => {
        return (
                <Provider store={store}>
                        <Router history={history}>
                                <>
                                        <Route path="/" render={() =>
                                                <>
                                                        <ConfigPropertiesContainer />
                                                        <PingApplicationsContainer />
                                                        <ApplicationsContainer />
                                                </>} />
                                        <Route path="/ApplicationsRegistryWeb/secure/:appId/:targetId" render={() =>
                                                <RegistriesContainer />} />
                                </>
                        </Router>
                </Provider>
        )
}

