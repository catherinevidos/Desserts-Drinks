import React from 'react';
import SpotItemContainer from './spot_item_container';
import './spot.scss';

import LoadingIcon from "../loading/loading";
import CommentFormContainer from '../comment/comment_form_container';

export default class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      reviews: {}
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
        this.props.businessess.slice(0, 5).map((location) => {
          this.props.fetchAllReviews(location.id).then((review) => {
            const reviews = this.state.reviews;
            reviews[location.id] = review.reviews[0].text;
            this.setState({ reviews: reviews });
          });
      });
      this.setState({ loading: false });
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
  
    let modalBackground;
    let commentLine;
    if (this.props.theme === "Desserts") {
      commentLine = (
        <h1 className="index-dessert">Desserts around you</h1>
      );
      modalBackground = 'modal-header'
    } else {
      commentLine = (
        <h1 className="index-drink">Drinks around you</h1>
      );
      modalBackground = 'modal-header-drink'
    }

    if (this.props.businessess.length === 0 || this.state.reviews.length === 0) return null;
      return (
        <>
          <div className="modal-header">
            {commentLine}
            <div className="x-close-modal">
              <button className="x-close-button" onClick={this.handleExit}>
                X
              </button>
            </div>
          </div>
          <div className="modal-body">
            <div className="business-list">
              {this.props.businessess.slice(0, 5).map((location, i) => {
                return (
                  <div className="businesses">
                    <SpotItemContainer
                      location={location}
                      key={location.id}
                      review={this.state.reviews[location.id]}
                    />
                  </div>
                );
              })}
            </div>
            <CommentFormContainer location={this.props.stopId} key={this.props.stopId}/>
          </div>
        </>
      );
  }
}