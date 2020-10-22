import React from 'react';
import './favspots.scss';
import {Link} from 'react-router-dom';

export default class FavSpots extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logoutUser();
  }

  // fetchComments() {
  //   this.props.fetchComments
  // }

  componentDidMount() {
    this.props.fetchAllStops();
    console.log(this.props.stops[0]);
  }

  

  

    render() {
      debugger
      if (this.props.stops.length === 0) {
        return null;
      }
      // if (this.props.currentUser.favSpots === undefined) return null;
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
                    <li className="username-text">
                      {this.props.currentUser.username}
                    </li>
                    <li>favorite desserts:</li>
                    <ul className="desserts-list">
                      <li>macarons, cupcakes, petit fours</li>
                    </ul>
                    <li className="drinks-list-parent">favorite drinks:</li>
                    <ul className="drinks-list">
                      <li>cucumber spritz, hibiscus margarita, sancerre</li>
                    </ul>
                  </ul>
                </div>
                <div className="profile-form">
                  <h1>My Favorites</h1>
                  <div className="stop-profile-wrapper">
                    <div className="stop-profile-header">
                      <h1>Our Users Say...</h1>
                    </div>
                    <ul>
                      {this.props.stops[0].map((stop) => {
                        debugger;
                        if (this.props.faves.includes(stop._id)) {
                          return (
                            <div className="fave-wrapper">
                              <li className="fave-usernames">{stop.name} </li>
                              <li className="stop-comments"> {stop.color} </li>
                            </div>
                          );
                        }
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}