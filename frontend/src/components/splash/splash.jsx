import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../nav/navbar_container';
import WebMapContainer from '../map/map_container';
import './splash.scss';

class Splash extends React.Component {

  render() {
    return (
      <div id='background-div' className={this.props.theme !== "Desserts" ? "background-drinks" : "background-desserts"}>
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