import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../features/home'
import Nav from '../features/nav'

export default function AppNavContainer() {
    return (
        <React.Fragment>
            <Nav />
            <Route exact path={["/", "/home"]} component={Home} />
            {/* <Route exact path="/login" component={Login} /> */}
            {/* <Route path="/user" component={Home} /> */}
        </React.Fragment>
    );
}
