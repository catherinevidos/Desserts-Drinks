import React from "react";
import { Map, GoogleApiWrapper, Marker, Polyline } from "google-maps-react";
import "./map.scss";
import LoadingIcon from '../../components/loading/loading';

const googleMapApiKey = require("../../config/secret").googleMapApiKey;

export class WebMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lng: "",
      loading: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllStops().then(() => {
      this.setState({
        loading: false,
      });
    });
  }
  
  handleClick(e) {
    this.setState({
      lat: e.position.lat,
      lng: e.position.lng,
    });
    this.props.openModal({
      modal: "business",
      lat: this.state.lat,
      lng: this.state.lng,
    });


  }
  render() {

    if (this.props.stops.length === 0) return null;
    if (this.state.loading) {
      return <LoadingIcon />;
    }

    let dynamicWidth = "calc(100% - 124px)";
    const style = {
      width: dynamicWidth,
      height: "70vh"
    };
    const { google } = this.props;

    let renderIcon;
    if (this.props.theme === 'Desserts') {
      renderIcon = {
        url: "https://bestfriend-treehouse-dev.s3.amazonaws.com/Untitled+design.png",
        scaledSize: new google.maps.Size(30, 30),
      };
    } else {
      renderIcon = {
        url: "https://pxelation-seeds.s3.amazonaws.com/1+(1).png",
        scaledSize: new google.maps.Size(30, 30),
      };
    }

    const westSide1 = [{
        lat: 40.702068,
        lng: -74.013664,
      },
      {
        lat: 40.707513,
        lng: -74.013783,
      },
      {
        lat: 40.715478,
        lng: -74.009266,
      },
      {
        lat: 40.719318,
        lng: -74.006886,
      },
      {
        lat: 40.722854,
        lng: -74.006277,
      },
      {
        lat: 40.728251,
        lng: -74.005367,
      },
      {
        lat: 40.733422,
        lng: -74.002906,
      },
      {
        lat: 40.75529,
        lng: -73.987495,
      },
      {
        lat: 40.761728,
        lng: -73.983849,
      },
      {
        lat: 40.768247,
        lng: -73.981929,
      },
      {
        lat: 40.77344,
        lng: -73.982209,
      },
      {
        lat: 40.778453,
        lng: -73.98197,
      },
      {
        lat: 40.783934,
        lng: -73.979917,
      },
      {
        lat: 40.793919,
        lng: -73.972323,
      },
      {
        lat: 40.799446,
        lng: -73.968379,
      },
      {
        lat: 40.803967,
        lng: -73.966847,
      },
      {
        lat: 40.807722,
        lng: -73.96411,
      },
      {
        lat: 40.815581,
        lng: -73.958372,
      },
      {
        lat: 40.822008,
        lng: -73.953676,
      },
    ];
    const westSide2 = [
      {
        lat: 40.706821,
        lng: -74.0091,
      },
      {
        lat: 40.709416,
        lng: -74.006571,
      },
      {
        lat: 40.713051,
        lng: -74.008811,
      },
      {
        lat: 40.715478,
        lng: -74.009266,
      },
    ];
    const westSide3 = [
      {
        lat: 40.793919,
        lng: -73.972323,
      },
      {
        lat: 40.798367,
        lng: -73.96698197,
      },
      {
        lat: 40.7962866,
        lng: -73.9622107,
      },
      {
        lat: 40.799075,
        lng: -73.951822,
      },
      {
        lat: 40.802098,
        lng: -73.949625,
      },
      {
        lat: 40.807754,
        lng: -73.945495,
      },
      {
        lat: 40.814229,
        lng: -73.94077,
      },
    ];
    const eastSide = [
      {
        lat: 40.704817,
        lng: -74.014065,
      },
      {
        lat: 40.707557,
        lng: -74.011862,
      },
      {
        lat: 40.710368,
        lng: -74.009509,
      },
      {
        lat: 40.712868,
        lng: -74.004806,
      },
      {
        lat: 40.718803,
        lng: -74.000193,
      },
      {
        lat: 40.722301,
        lng: -73.997141,
      },
      {
        lat: 40.725915,
        lng: -73.994659,
      },
      {
        lat: 40.730054,
        lng: -73.99107,
      },
      {
        lat: 40.739864,
        lng: -73.986599,
      },
      {
        lat: 40.74307,
        lng: -73.984264,
      },
      {
        lat: 40.746081,
        lng: -73.982076,
      },
      {
        lat: 40.751776,
        lng: -73.976848,
      },
      {
        lat: 40.757107,
        lng: -73.97192,
      },
      {
        lat: 40.762526,
        lng: -73.967967,
      },
      {
        lat: 40.768141,
        lng: -73.96387,
      },
      {
        lat: 40.77362,
        lng: -73.959874,
      },
      {
        lat: 40.779492,
        lng: -73.955589,
      },
      {
        lat: 40.785672,
        lng: -73.95107,
      },
      {
        lat: 40.804138,
        lng: -73.937594,
      },
    ];

    let mapColor;
    if (this.props.theme === "Desserts") {
      mapColor = 'map-container-div';
    } else {
      mapColor = 'martini-map-color';
    }
    
    return (
      <div className={mapColor}>
        <Map
          google={this.props.google}
          style={style}
          zoom={12}
          initialCenter={{ lat: 40.7678805, lng: -73.97103059999999 }}
        >
          <Polyline
            path={westSide1}
            strokeColor="#DF564F"
            strokeOpacity={0.8}
            strokeWeight={4}
          />
          <Polyline
            path={westSide2}
            strokeColor="#DF564F"
            strokeOpacity={0.8}
            strokeWeight={4}
          />
          <Polyline
            path={westSide3}
            strokeColor="#DF564F"
            strokeOpacity={0.8}
            strokeWeight={4}
          />
          <Polyline
            path={eastSide}
            strokeColor="#489D5B"
            strokeOpacity={0.8}
            strokeWeight={4}
          />
          {this.props.stops[0].map((stop, i) => (
            <Marker
              key={`${i}-${stop.id}`}
              title={stop.name}
              position={{ lat: stop.lat, lng: stop.lng }}
              onClick={(e) => this.handleClick(e)}
              icon={renderIcon}
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
