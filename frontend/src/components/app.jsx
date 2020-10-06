import React from 'react';
import {
  AuthRoute
} from '../util/route_util';
import {
  Route,
  Switch
} from 'react-router-dom';
// import WebMap from "./components/map2";

import LoginContainer from './login/login_container';
import SignupContainer from './signup/signup_container';
import SplashContainer from './splash/splash_container';

const App = () => (

    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
    </Switch>

);

export default App;