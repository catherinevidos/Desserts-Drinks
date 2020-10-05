import React from 'react';
import {
  AuthRoute
} from '../util/route_util';
import {
  Switch
} from 'react-router-dom';


import LoginContainer from './login/login_container';
import SignupContainer from './signup/signup_container';
import SplashContainer from './splash/splash_container';

const App = () => ( 
  <div>
    <Switch >
      <AuthRoute exact path='/' component={SplashContainer}/> 
      <AuthRoute exact path='/login' component={LoginContainer}/>
      <AuthRoute exact path='/signup' component={SignupContainer}/>
    </Switch> 
  </div>

);

export default App;