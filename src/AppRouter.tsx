import React from "react";
import { Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';
import { createBrowserHistory as createHistory } from 'history'
import {ApplicationsContailner} from './components/applications';

import './resources/css/index.css';
import './resources/css/w3.css';



const history = createHistory();
const SIDEBAR_WIDTH: number = 160;

export const AppRouter: React.StatelessComponent<{}> = () => {
        return (
                <Provider store={store}>
                        <Router history={history}>
                                <div>
                                        <ApplicationsContailner sideWidth={SIDEBAR_WIDTH} />
                                 </div>
                        </Router>
                </Provider>
        )
}

