import React from 'react';
import {
  AuthRoute
} from '../util/route_util';
import {
  Route,
  Switch
} from 'react-router-dom';
// import WebMap from "./components/map2";
import FooterContainer from './footer/footer';

import './reset.scss';
import './app.scss';

import LoginContainer from './login/login_container';
import SignupContainer from './signup/signup_container';
import SplashContainer from './splash/splash_container';

const App = () => (
  <div className='app-container-div'>




    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
    </Switch>

    <div className='splash-footer'>
      <FooterContainer />
    </div>
  </div>
);

export default App;