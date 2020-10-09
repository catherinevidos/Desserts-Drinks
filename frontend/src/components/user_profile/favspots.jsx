import React from 'react';
import NavbarContainer from '../nav/navbar_container';
import './favspots.scss';

export default class FavSpots extends React.Component {

    render() {
        return (
          <div className="fav-spots">
            <div className='fun-div'>
              <NavbarContainer />
            </div>
            <h1 className="logout-button">Your favorite spots coming soon...</h1>
          </div>
        );
    }
}