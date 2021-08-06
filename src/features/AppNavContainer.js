import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../features/home'
import Nav from '../features/nav'
import MyProfile from './profile/MyProfile';

export default function AppNavContainer() {
    return (
        <React.Fragment>
            <Nav />
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/profile" component={MyProfile} />
            {/* <Route path="/user" component={Home} /> */}
        </React.Fragment>
    );
}
