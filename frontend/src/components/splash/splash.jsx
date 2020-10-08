import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../nav/navbar_container';
import WebMapContainer from '../map/map_container';
import './splash.scss';

class Splash extends React.Component {

  render() {

    let backgroundImg;
    if (this.props.currentUser.theme === 'dessert') {
    backgroundImg = {'https://pxelation-seeds.s3.amazonaws.com/193973.png'}} else {
    backgroundImg = {}
    }
  
    return (
      <div className="top-level-div">
        <img src={backgroundImg} alt=""/>
        <div className="main-splash-container">
          <header className="splash-header">
            <Navbar />
          </header>

          <div className="splash-map-container">
            <div id="map">
              <WebMapContainer className="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Splash);