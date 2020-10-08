import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.scss';
import LogoSmall from './logo_small.png';

export default class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.stops;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logoutUser();
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="nav-container">
          <h1>click a donut to get started...</h1>
          {/* <img className='nav-logo' src={LogoSmall} alt='' /> */}
          <div className="buttons-container">
            <div className="profile-button">
              <Link to="/">profile</Link>
            </div>
            <div className="login-button">
              <Link to="/login">login</Link>
            </div>
            <button
              className="logout-button"
              onClick={() => {
                this.handleClick();
              }}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    );

  }
}