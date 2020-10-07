import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.scss';

export default class Navbar extends React.Component {
  constructor(props){
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logoutUser();
  }

  render() {
    const LogoutButton = (this.props.currentUser === undefined) ? <Link to='/login'> Login Here</Link> : null;

    return (
      <div>
        <button className="logout-button" onClick={() => {this.handleClick()}}>
          Logout
        </button>
        <button onClick={this.props.openModal}>HELLO WORLD</button>
        {LogoutButton}
      </div>
    );

  }
}