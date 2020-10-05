import React from "react";
import { GoogleApiWrapper } from "google-maps-react";
import mapCSS from "./map.css";
import ReactDOM from "react-dom";
const googleMapApiKey = require("../config/keys").googleMapApiKey;
// import { withRouter } from 'react-router-dom';

// import MarkerManager from "../../util/marker_manager";

const getCoordsObj = (latLng) => ({
  latitude: latLng.lat(),
  longitude: latLng.lng(),
});

const mapCenter = {
  center: {
    lat: 40.728009,
    lng: -73.989565,
  },
  zoom: 13,
};

class Map extends React.Component {
  componentDidMount() {
    // this.MarkerManager = new MarkerManager(this.map);
    const map = ReactDOM.findDOMNode(this.refs.map);
    // this.map = new google.maps.Map(map, mapCenter);
  }

  registerListeners() {
    this.map.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west },
      };
    //   this.props.updateFilter("bounds", bounds);
    });

    this.map.addListener(this.map, "click", (event) => {
      const coords = getCoordsObj(event.latLng);
    });
  }

  render() {
    return <div id="map" ref="map"></div>;
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapApiKey,
})(Map);
