import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../features/home'
import Nav from '../features/nav'
import MyProfile from './profile/MyProfile';
import Services from './services/Services';
import UserBalances from './users/UserBalances';
import Users from './users/Users';

export default function AppNavContainer() {
    return (
        <React.Fragment>
            <Nav />
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/user-balances" component={UserBalances} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/profile" component={MyProfile} />
            {/* <Route path="/user" component={Home} /> */}
        </React.Fragment>
    );
}
