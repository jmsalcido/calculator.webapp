import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Switch, Router, Route } from 'react-router-dom';
import SignIn from './features/auth'
import AppNavContainer from './features/AppNavContainer';

import history from './app/history';

function App() {
  return (
    <Router history={history}>
      <CssBaseline />
      <Switch>
        <Route exact path={["/signIn"]} component={SignIn} />
        <Route component={AppNavContainer} />
      </Switch>
    </Router>
  );
}

export default App;
