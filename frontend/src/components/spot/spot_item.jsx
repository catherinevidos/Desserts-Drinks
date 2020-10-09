import React from "react";
import $ from 'jquery';
import './spot_item.scss';
const yelpApiKey = require("../../config/secret").yelpApiKey;


class SpotItem extends React.Component {
  constructor(props) {
    super(props);

    this.openInNewTab = this.openInNewTab.bind(this);
  }

  componentDidMount() {
    debugger
      this.props.fetchAllReviews(this.props.location.id);
  }
  
  openInNewTab(href) {
    Object.assign(document.createElement("a"), {
      target: "_blank",
      href,
    }).click();
  }

  render() {
    // this.getBusinessDetails();
    console.log(this.props)
    const { name, image_url, location, display_phone } = this.props.location;
    return (
      <div className="spot-index-item">
        <div className="index-item-image">
          <img
            src={image_url}
            alt=""
            onClick={() => this.openInNewTab(this.props.location.url)}
          />
        </div>
        <div className="index-item-info">
          <p className="index-item-name">{name}</p>
          <p className="index-item-address">{location.display_address}</p>
          <p className="index-item-phone">{display_phone}</p>
          {/* <p className="index-item-address">{this.props.reviews.text[0]}</p> */}
        </div>
      </div>
    );
  }
}

export default SpotItem;