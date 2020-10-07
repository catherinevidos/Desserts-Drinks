import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
  constructor(props){
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const LogoutButton = (this.props.currentUser === undefined) ? <Link to='/login'> Login Here</Link> : null;

    return (
      <div>
<<<<<<< HEAD
        <button className="logout button" onClick={(e) => this.handleClick(e)}>
          Logout
        </button>
        <button onClick={this.props.openModal}>HELLO WORLD</button>
=======
        <button className="logout button" onClick={this.props.logoutUser}>
          Logout
        </button>
>>>>>>> e8f53630202f0c07c0de5431b4f0e34d12fdb92f
        {LogoutButton}
      </div>
    );

  }
}