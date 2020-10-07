import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.stops;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.openModal({
      modal: 'spot',
      stopId: this.state.stops.data.id
    });
  }

  render() {
    const LogoutButton = (this.props.currentUser === undefined) ? <Link to='/login'> Login Here</Link> : null;

    return (
      <div>
        <button className="logout button" onClick={this.handleClick}>
          Logout
        </button>
        <button onClick={this.handleClick}>HELLO WORLD</button>
        {LogoutButton}
      </div>
    );

  }
}