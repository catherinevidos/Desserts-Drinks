import React from 'react';
import './favspots.scss';
import {Link} from 'react-router-dom';

export default class FavSpots extends React.Component {

    render() {
        // return (
        //   <div className="fav-spots">
        //     <div className="fun-div">
        //       <NavbarContainer />
        //     </div>
        //     <h1 className="logout-button">
        //       Your favorite spots coming soon...
        //     </h1>
        //     <div className='link-home'>
        //       <Link to="/">Go back</Link>
        //     </div>
        //   </div>
        // );
      return (
        <div className="fav-spots">
          <div className="profile-container">
            <div className="profile-navbar">
              <h1 className="my-favorites">Favorite Stops</h1>
              <div className="buttons-container">
                <div className="profile-buttons-right">
                  <div className="go-home-button">
                    <Link to="/">home</Link>
                  </div>
                  <div className="about-button">
                    <Link to="https://github.com/catherinevidos/Desserts-Drinks">
                      about
                    </Link>
                  </div>
                  <button
                    className="logout-button-profile"
                    onClick={() => {
                      this.handleClick();
                    }}
                  >
                    logout
                  </button>
                </div>
              </div>
            </div>
            <div className="profile-body">
              <div className="profile-sidebar">
                <div className="profile-image"></div>
                <ul> 
                  <li className='username-text'>{this.props.currentUser.username}</li>
                  <li>favorite desserts:</li>
                    <ul className='desserts-list'>
                      <li>macarons, cupcakes, petit fours</li>
                    </ul>
                    <li className="drinks-list-parent">favorite drinks:</li>
                    <ul className='drinks-list'>
                      <li>cucumber spritz, hibiscus margarita, sancerre</li>
                    </ul>
                </ul>
              </div>
              <div className="profile-form">
                <h1>My Favorites</h1>
                <ol className='stops-list'>
                  {['86th st', 'astor place', '96th st', 'bleecker st', 'houston st'].map((stop) => (
                    <li>{stop}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      );
    }
}