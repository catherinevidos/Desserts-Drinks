import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../nav/navbar_container';
import WebMapContainer from '../map/map_container';
import './splash.scss';

class Splash extends React.Component {

  render() {
    return (
      <div className='top-level-div'>
        <div className='main-splash-container'>

          <header className='splash-header'>
            <span className='title-h1'><h1>DESSERT AND DRINKS (placeholder)</h1></span>
            <span className='navbar'><Navbar /></span>
          </header>

          <div className='splash-map-container'>
            <div id="map">
              <WebMapContainer className=''/>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(Splash);