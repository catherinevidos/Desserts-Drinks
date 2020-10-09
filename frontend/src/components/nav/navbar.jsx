import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.scss';

export default class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.getLink = this.getLink.bind(this);
    this.handleTheme = this.handleTheme.bind(this);
  }

  handleClick() {
    this.props.logoutUser();
  }

  getLink(){
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

  handleTheme(e){
    e.preventDefault();
    if (this.props.theme === 'Desserts') {
      this.props.drinksTheme();
    } else {
      this.props.dessertTheme();
    }
  }

  render() {
    let commentLine;
    if (this.props.theme === "Desserts") {
      commentLine = <h1 className='dessert-header'>click on a donut to get started...</h1>;
    } else {
      commentLine = <h1 className='martini-header'>click on a martini to get started...</h1>
    }

    return (
      <div className="nav-wrapper">
        <div className="nav-container">
          {commentLine}
          <div className="buttons-container">
            <div className="profile-button">
              <Link to="/profile">profile</Link>
            </div>
            <div className="login-button">
              <button to="/" onClick={this.handleTheme}>theme</button>
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
      )
  }
}