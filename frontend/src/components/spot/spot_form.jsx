import React from 'react';
import $ from 'jquery';
import SpotItem from './spot_item'
import './spot.scss'
import LoadingIcon from "../loading/loading";

const yelpApiKey = require("../../config/secret").yelpApiKey;

export default class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      business: [],
      loading: true
    };
    this.handleExit = this.handleExit.bind(this);
    this.getBusinessDetails = this.getBusinessDetails.bind(this);
  }

  handleExit(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  componentDidMount(){
    this.props.fetchAllBusinessess(
      this.props.lat,
      this.props.lng,
      this.props.theme
    ).then(() => {
      this.setState({ loading: false })
    });
  }

  getBusinessDetails() {
    let searchTerm;
    if (this.props.theme === "Desserts") {
      searchTerm = "desserts";
    } else {
      searchTerm = "drinks";
    }
  }

  render() {
    if (this.state.loading) { return <LoadingIcon/> }
    if (this.props.businessess.length === 0) return null;
      return (
        <>
          <div className="modal-header">
            <h1 className="modal-title">Donuts around you</h1>
            <div className='x'>
              <button onClick={this.handleExit}>X</button>
            </div>
          </div>
          <div className="modal-body">
            <div className="business-list">
              {this.props.businessess.slice(0, 5).map((location) => (
                <div className="businesses">
                  <SpotItem location={location} key={location.id} />
                </div>
              ))}
            </div>
          </div>
        </>
      );
  }
}