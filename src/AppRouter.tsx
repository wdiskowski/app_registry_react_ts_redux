import React from "react";
import { Provider } from 'react-redux';
import { store } from './store';
import { ApplicationsContainer } from './components/applications';
import { RegistriesContainer } from './components/registries';
import { ConfigPropertiesContainer } from './components/configProperties';
import { PingApplicationsContainer } from './components/pingApplications';

import './resources/css/index.css';
import './resources/css/w3.css';




export const AppRouter: React.StatelessComponent<{}> = () => {
        return (
                <Provider store={store}>
                        <>
                                <ConfigPropertiesContainer />
                                <PingApplicationsContainer />
                                <ApplicationsContainer />
                                <RegistriesContainer />
                        </>
                </Provider>
        )
}

