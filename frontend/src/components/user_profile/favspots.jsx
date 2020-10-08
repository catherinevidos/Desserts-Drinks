import React from 'react';
import NavbarContainer from '../nav/navbar_container';
import './favspots.scss';

export default class FavSpots extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render() {
        return (
          <div className="fav-spots">
            <NavbarContainer />
            <h1 className="fav-spots-header">Your favorite spots</h1>
          </div>
        );
    }
}