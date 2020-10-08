import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import YelpAPI from "../yelp/yelp_api";
import "./map.scss";
const googleMapApiKey = require("../../config/secret").googleMapApiKey;

export class WebMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lng: "",
      openModal: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.fetchAllStops();
  }
  handleClick(e) {
    this.setState({
      lat: e.position.lat,
      lng: e.position.lng,
      openModal: 'spot'
    })
  }

  render() {
    if (this.props.stops.length === 0) return null;

    const style = {
      width: "2000px",
      height: "800px",
    };
    const { google } = this.props;
    return (
      <div className="map-container-div">
        <Map
          google={this.props.google}
          style={style}
          zoom={14}
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
        {/* {(this.state.openModal === 'spot') ? ( */}
          <YelpAPI lat={this.state.lat} lng={this.state.lng} openModal={this.props.openModal} />
        {/* ) : null} */}
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: googleMapApiKey,
})(WebMap);
