import React from 'react';
import './favspots.scss';
import {Link} from 'react-router-dom';

export default class FavSpots extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.subwayConvert = this.subwayConvert.bind(this);
    this.subwayLine = this.subwayLine.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.toggleFav = this.toggleFav.bind(this);
  }

  handleClick() {
    this.props.logoutUser();
  }

  handleButton(e) {
    e.preventDefault();

    const stopId = e.target.value;
    this.toggleFav(stopId);
  }

  toggleFav(stopId) {

    this.props.Favorite(stopId).then(() => {
      this.props.saveFavStop(stopId);
    });
  }

  componentDidMount() {
    this.props.fetchAllStops();
  }


  subwayConvert(stopColor) {
    let icon;
    if (stopColor === 'red') {
      icon = 'subway-icon mta-red';
    } else if (stopColor === 'green') {
      icon = 'subway-icon mta-green';
    } else if (stopColor === 'yellow') {
      icon = 'subway-icon mta-yellow';
    } else {
      icon = '';
    }
    return icon;
  }

  subwayLine(stopColor) {
    let lines;
    if (stopColor === 'red') {
      lines = [1, 2, 3];
    } else if (stopColor === 'green') {
      lines = [4, 5, 6];
    } else if (stopColor === 'yellow') {
      lines = ['N', 'Q', 'R'];
    } else {
      lines = ''
    }
    return lines;
  }
  

    render() {
      
      let noStopsYet;
      if (this.props.stops.length === 0) {
        noStopsYet = <h1 className='no-faves-yet'>You don't have any favorite stops yet...</h1>
        return null;
      } else {
        noStopsYet = <h1>My Favorites</h1>
      }
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
                      <a href="https://github.com/catherinevidos/Desserts-Drinks" target="_blank" rel="noopener noreferrer">
                        about
                      </a>
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
                    <li>desserts of the month:</li>
                    <ul className="desserts-list">
                      <li>macarons, cupcakes, petit fours</li>
                    </ul>
                    <li className="drinks-list-parent">drinks of the month:</li>
                    <ul className="drinks-list">
                      <li>cucumber spritz, hibiscus margarita, sancerre</li>
                    </ul>
                  </ul>
                </div>
                <div className="profile-form">
                  {noStopsYet}
                  <div className="stop-profile-wrapper">
                    <div className="stop-profile-header">
                    </div>
                    <ul>
                      {this.props.stops[0].map((stop) => {
                        if (this.props.faves.includes(stop._id)) {
                          return (
                            <div className="fave-wrapper">
                              <div className="delete-stop">
                                <li className="fave-usernames">Stop: {stop.name} </li>
                                <button onClick={this.handleButton} className='x-close-profile' value={stop._id}>X</button>
                              </div>
                          <li className='subway-line'>Line:
                          <span className={this.subwayConvert(stop.color)}>{this.subwayLine(stop.color)[0]}</span>
                          <span className={this.subwayConvert(stop.color)}>{this.subwayLine(stop.color)[1]}</span>
                          <span className={this.subwayConvert(stop.color)}>{this.subwayLine(stop.color)[2]}</span>
                          </li>
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