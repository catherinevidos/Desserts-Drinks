import React from 'react';
import Navbar from '../nav/navbar_container';

export default class Splash extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <header>
        <Navbar/>
      </header>
    );
  }
}