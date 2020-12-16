import React from 'react';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch, Redirect } from 'react-router-dom';
import FavSpotsContainer from './user_profile/favspots_container';
import './reset.scss';
import './app.scss';

import LoginContainer from './login/login_container';
import SignupContainer from './signup/signup_container';
import SplashContainer from './splash/splash_container';
import Modal from './modal/modal';

const App = () => (
  <div className="app-container-div">
    <Modal />
    <Switch>
      <AuthRoute exact path="/" component={LoginContainer} />
      <Redirect from="/login" to="/"/>
      <ProtectedRoute exact path="/main" component={SplashContainer} />
      <ProtectedRoute exact path="/profile" component={FavSpotsContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
    </Switch>
  </div>
);

export default App;