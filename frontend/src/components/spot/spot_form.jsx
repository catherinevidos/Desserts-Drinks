import React from 'react';
import $ from 'jquery';
import SpotItem from './spot_item'
import './spot.scss'

const yelpApiKey = require("../../config/secret").yelpApiKey;

export default class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      business: [],
    };
    this.handleExit = this.handleExit.bind(this);
    this.getBusinessDetails = this.getBusinessDetails.bind(this);
  }

  handleExit(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  componentDidMount(){
    this.getBusinessDetails();
  }

  getBusinessDetails() {
    let url =
      "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=desserts";
    url = url + "&latitude=" + `${this.props.lat}`;
    url = url + "&longitude=" + `${this.props.lng}`;
    let that = this;
    $.ajax({
      url: url,
      headers: {
        Authorization: `Bearer ${yelpApiKey}`,
      },
      method: "GET",
      dataType: "json",
      success: function (data) {
        
            that.setState({ business: data.businesses });
        
        }
    })
  }

  render() {

    if (this.state.business.length === 0) return null;

    return (
      <>
        <div className="modal-header">
          <h1 className="modal-title">Donuts around you</h1>
        </div>
        <div className="modal-body">
          <div className="business-list">
            {this.state.business.slice(0, 5).map((location) => (
              <div className="businesses">
                <SpotItem location={location} key={location.id} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <button onClick={this.handleExit}>X</button>
        </div>
      </>
    );
  }
}