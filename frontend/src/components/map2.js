import React from 'react';
import {
  Map,
  GoogleApiWrapper,
  Marker
} from 'google-maps-react';
const googleMapApiKey = require("../config/secret").googleMapApiKey;

export class WebMap extends React.Component {
   render() {
        const style = {
        width: "500px",
        height: "1000px",
        };
        const { google } = this.props;
        return (
          <Map
            google={this.props.google}
            style={style}
            zoom={13}
            initialCenter={{ lat: 40.7678805, lng: -73.97103059999999 }}
          >
            <Marker
              title={"stop1"}
              name={"Name 1"}
              position={{ lat: 40.7678805, lng: -73.97103059999999 }}
              icon={{
                url: "https://bestfriend-treehouse-dev.s3.amazonaws.com/Marker_logo.png",
                anchor: new google.maps.Point(32, 32),
                scaledSize: new google.maps.Size(75, 75),
              }}
            />
          </Map>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: googleMapApiKey,
})(WebMap);
