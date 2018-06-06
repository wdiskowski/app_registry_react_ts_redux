import React from "react";
import { Route, Router } from "react-router-dom";
import { createBrowserHistory as createHistory } from 'history'
import TabView from './TabView';
import SidebarNavigation from './SidebarNavigation';

import './resources/css/index.css';
import './resources/css/w3.css';



const history = createHistory();
const SIDEBAR_WIDTH: number = 160;

export const AppRouter: React.StatelessComponent<{}> = () => {
        return (
                <Router history={history}>
                        <div>
                                <SidebarNavigation sideWidth={SIDEBAR_WIDTH} />
                                <Route path="/ApplicationRegistryWeb/secure/:appId/:targetId" render={props =>
                                        <TabView sideWidth={SIDEBAR_WIDTH} appId={props.match.params.appId} targetId={props.match.params.targetId} />} />

                        </div>
                </Router>
        )
}

