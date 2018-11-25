// src/routes.js

import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App.js';
import MyList from './components/MyList.js';
import Callback from './Callback.js';
import Auth from './Auth/Auth.js';
import history from './history.js';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route path="/" render={(props) => <MyList auth={auth} {...props} />} />
        <Route path="/mylist" render={(props) => <App auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }}/>
      </div>
    </Router>
  );
}
