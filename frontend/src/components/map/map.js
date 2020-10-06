import React from 'react';
import {
  Map,
  GoogleApiWrapper,
  Marker
} from 'google-maps-react';
import './map.scss';

const googleMapApiKey = require("../../config/secret").googleMapApiKey;

export class WebMap extends React.Component {

  componentDidMount() {
    this.props.fetchAllStops();
  }
 
  render() {
    debugger
    if (this.props.stops.length === 0) return null;
    const style = {
      width: "500px",
      height: "1000px",
    };
    debugger
    const { google } = this.props;
    console.log(this.props);
    return (
      <div className='map-container-div'>
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
              icon={{
                url:
                  "https://bestfriend-treehouse-dev.s3.amazonaws.com/Marker_logo.png",
                anchor: new google.maps.Point(32, 32),
                scaledSize: new google.maps.Size(75, 75),
              }}
            />
          ))}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapApiKey,
})(WebMap);
