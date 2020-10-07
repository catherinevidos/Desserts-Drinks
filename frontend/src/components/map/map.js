import React from 'react';
import {
  Map,
  GoogleApiWrapper,
  Marker
} from 'google-maps-react';
import YelpAPI from '../yelp/yelp_api';
const googleMapApiKey = require("../../config/secret").googleMapApiKey;


export class WebMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      lng: '',
      openModal: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllStops();
  }

  handleClick(e){
    this.setState({
      lat: e.position.lat,
      lng: e.position.lng,
      openModal: true
    })
  }
 
  render() {
    if (this.props.stops.length === 0) return null;
    
    const style = {
      width: "500px",
      height: "1000px",
    };
    debugger
    const { google } = this.props;
    console.log(this.props);
    return (
      <div className='map'>
        <Map
          google={this.props.google}
          style={style}
          zoom={13}
          initialCenter={{ lat: 40.7678805, lng: -73.97103059999999 }}
        >
          {this.props.stops[0].map((stop, i) => (
            <Marker
              key={`${i}-${stop.id}`}
              title={stop.name}
              position={{ lat: stop.lat, lng: stop.lng }}
              onClick={this.handleClick}
              icon={{
                url:
                  "https://bestfriend-treehouse-dev.s3.amazonaws.com/Untitled+design.png",
                scaledSize: new google.maps.Size(30, 30),
              }}
            />
          ))}
        </Map>
        {this.state.openModal ? 
          <YelpAPI 
            lat={this.state.lat} 
            lng={this.state.lng}
          /> 
        : null}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapApiKey,
})(WebMap);
