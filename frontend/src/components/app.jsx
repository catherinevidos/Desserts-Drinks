import React from 'react';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import {
  Route,
  Switch
} from 'react-router-dom';
// import WebMap from "./components/map2";
// import FooterContainer from './footer/footer';
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
      <ProtectedRoute exact path="/" component={SplashContainer} />
      <ProtectedRoute exact path="/profile" component={FavSpotsContainer} />
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
    </Switch>

    {/* <div className='splash-footer'>
      <FooterContainer />
    </div> */}
  </div>
);

export default App;