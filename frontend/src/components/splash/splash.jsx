import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../nav/navbar_container';
import WebMapContainer from '../map/map_container';
import './splash.scss';

class Splash extends React.Component {

  render() {
    return (
      <div>
        <h1>DESSERT AND DRINKS</h1>
        <header>
          <Navbar />
        </header>
        <div className='splash-map-container'>
          <div id="map">
            <WebMapContainer />
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(Splash);