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
        width: "100%",
        height: "100%",
        };
        return (
          <Map
            google={this.props.google}
            style={style}
            zoom={13}
            initialCenter={{ lat: 40.7678805, lng: -73.97103059999999 }}
          >
            <Marker
              title={"Title 1"}
              name={"Name 1"}
              position={{ lat: 40.7678805, lng: -73.97103059999999 }}
            />
          </Map>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: googleMapApiKey,
})(WebMap);
