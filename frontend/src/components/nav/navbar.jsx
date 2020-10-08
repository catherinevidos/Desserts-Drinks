import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.scss';

export default class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.stops;
    this.handleClick = this.handleClick.bind(this);
    this.getLink = this.getLink.bind(this);
  }

  handleClick() {
    this.props.logoutUser();
  }

  getLink(){
    // const LogoutButton = (this.props.currentUser === undefined) ? <Link to='/login'> Login Here</Link> : null;
    return this.props.loggedIn ? (
      <div>
        <Link className="fav-spots" to="/profile">profile</Link>
        <button
          className="logout-button"
          onClick={() => {
            this.handleClick();
          }}
        >
          Logout
        </button>
      </div>
    ) : (
      <Link to="/login">Login Here</Link>
    );
  }

  render() {
    // const LogoutButton = (this.props.currentUser === undefined) ? <Link to='/login'> Login Here</Link> : null;

    return (
      <div>
        {this.getLink() }
        {/* <button className="logout-button" onClick={() => {this.handleClick()}}>
          Logout
        </button>
        <button onClick={this.handleClick}>HELLO WORLD</button>
        {LogoutButton} */}
      </div>
    );

  }
}