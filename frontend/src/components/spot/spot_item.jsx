import React from "react";
import './spot_item.scss';

class SpotItem extends React.Component {
  constructor(props) {
    super(props);

    this.openInNewTab = this.openInNewTab.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllReviews(this.props.location.id);
  }
  
  openInNewTab(href) {
    Object.assign(document.createElement("a"), {
      target: "_blank",
      href,
    }).click();
  }

  render() {
    if (this.props.reviews.length === 0) return null;
    const topReview = this.props.reviews[0].text;
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
          <p className="index-item-review">{topReview}</p>
        </div>
      </div>
    );
  }
}

export default SpotItem;