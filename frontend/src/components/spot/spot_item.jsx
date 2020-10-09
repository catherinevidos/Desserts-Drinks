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
  }

  render() {
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
        </div>
      </div>
    );
  }
}

export default SpotItem;