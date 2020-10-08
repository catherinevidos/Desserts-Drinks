import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import YelpAPI from "../yelp/yelp_api";
import "./map.scss";
import LoadingIcon from '../../components/loading/loading';
import SpotFormContainer from '../spot/spot_form_container';
import $ from "jquery";
const googleMapApiKey = require("../../config/secret").googleMapApiKey;
const yelpApiKey = require("../../config/secret").yelpApiKey;

export class WebMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lng: "",
      openModal: true,
      loading: false,
      business: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.getBusinessDetails = this.getBusinessDetails.bind(this);
  }
  componentDidMount() {
    this.props.fetchAllStops().then(() => {
      this.setState({
        loading: false,
      });
    });
  }

  getBusinessDetails(lat, lng) {
    //https://api.yelp.com/v3/businesses/search?term=dessert&latitude=40.7678805&longitude=-73.97103059999999
    let url =
      "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=dessert";
    url = url + "&latitude=" + `${lat}`;
    url = url + "&longitude=" + `${lng}`;
    debugger;
    let that = this;
    $.ajax({
      url: url,
      headers: {
        Authorization: `Bearer ${yelpApiKey}`,
      },
      method: "GET",
      dataType: "json",
      success: function (data) {
        debugger;
        that.setState({ business: data.businesses });
      },
    });
  }

  handleClick(e) {
    debugger
    this.setState({
      lat: e.position.lat,
      lng: e.position.lng,
      openModal: "spot",
    });
    this.getBusinessDetails(e.position.lat, e.position.lng);
    // this.props.openModal('spot');
  }

  render() {
    if (this.props.stops.length === 0) return null;
    if (this.state.loading) {
      return <LoadingIcon />;
    }

    let dynamicWidth = "calc(100% - 126px)";
    const style = {
      width: dynamicWidth,
      height: "70vh",
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
              onClick={(e) => this.handleClick(e)}
              icon={{
                url:
                  "https://bestfriend-treehouse-dev.s3.amazonaws.com/Untitled+design.png",
                scaledSize: new google.maps.Size(30, 30),
              }}
            />
          ))}
        </Map>
        {/* {(this.state.openModal === 'spot') ? ( */}
        {/* <YelpAPI lat={this.state.lat} lng={this.state.lng} openModal={this.props.openModal} /> */}
        {/* ) : null} */}
        <SpotFormContainer lat={this.state.lat} lng={this.state.lng} business={this.state.business}/>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: googleMapApiKey,
})(WebMap);

