import React from 'react';
import Navbar from '../nav/navbar_container';

export default class Splash extends React.Component {

  render() {
    return (
      <div>
        <h1>hello from the splash page</h1>
        <header>
          <Navbar />
        </header>
      </div>
    );
  }
}