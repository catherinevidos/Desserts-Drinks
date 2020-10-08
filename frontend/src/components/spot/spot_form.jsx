import React from 'react';
import BusinessItems from './BusinessItems';
import $ from 'jquery';

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

  componentDidMount() {
    this.getBusinessDetails();
  }

  getBusinessDetails() {
    let url =
      "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=dessert";
    url = url + "&latitude=" + `${this.props.lat}`;
    url = url + "&longitude=" + `${this.props.lng}`;
    debugger
    let that = this;
    $.ajax({
      url: url,
      headers: {
        Authorization: `Bearer ${yelpApiKey}`,
      },
      method: "GET",
      dataType: "json",
      success: function (data) {
            debugger
            that.setState({ business: data.businesses });
            debugger
        }
    })
  }

  render() {
      debugger
      if (this.state.business.length === 0) return null;
      debugger
        return (
          <div>
            <h1>Donuts around you</h1>
            {this.state.business.map((location) => (
              <div>
                <li>{location.name}</li>
              </div>
            ))}
            <div>
              <button onClick={this.handleExit}>X</button>
            </div>
          </div>
        );
  }
}