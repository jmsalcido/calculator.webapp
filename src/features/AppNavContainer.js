import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../features/home';
import Nav from '../features/nav';
import MyProfile from './profile/MyProfile';
import Records from './records/Records';
import UserRecords from './records/user/UserRecords';
import Services from './services/Services';
import UserBalances from './users/UserBalances';
import Users from './users/Users';
import { Services as OperationServices } from './operations/Services';

export default function AppNavContainer() {
    return (
        <React.Fragment>
            <Nav />
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/user-balances" component={UserBalances} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/profile" component={MyProfile} />
            <Route exact path="/records" component={Records} />
            <Route exact path="/user-records" component={UserRecords} />
            <Route exact path="/service/new" component={OperationServices} />
        </React.Fragment>
    );
}
