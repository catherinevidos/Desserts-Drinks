import React from "react";
import $ from 'jquery';
import './spot_item.scss';
const yelpApiKey = require("../../config/secret").yelpApiKey;


class SpotItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };

    // this.getBusinessDetails = this.getBusinessDetails.bind(this);
  }

  // getBusinessDetails() {
  //   //https:cors-anywhere.herokuapp.com/

  //   const locationId = this.props.location.id;
  //   let url = `https://api.yelp.com/v3/businesses/${locationId}/reviews`;
  //   let that = this;
  //   $.ajax({
  //     url: url,
  //     headers: {
  //       Authorization: `Bearer ${yelpApiKey}`,
  //     },
  //     method: "GET",
  //     dataType: "json",
  //     success: function (data) {
  //       that.setState({ reviews: data.reviews.text });
  //     },
  //   });
  // }

  render() {
    // this.getBusinessDetails();
    const { name, image_url, location, display_phone } = this.props.location;
    return (
      <div className="spot-index-item">
        <div className="index-item-image">
          <img src={image_url} alt="" />
        </div>
        <div className="index-item-info">
          <p className="index-item-name">{name}</p>
          <p className="index-item-address">{location.display_address}</p>
          <p className="index-item-phone">{display_phone}</p>
          {/* <p className="index-item-address">{this.state.reviews[0]}</p> */}
        </div>
      </div>
    );
  }
}

export default SpotItem;