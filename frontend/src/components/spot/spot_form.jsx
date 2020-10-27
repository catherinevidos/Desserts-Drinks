import React from 'react';
import SpotItemContainer from './spot_item_container';
import './spot.scss';

import LoadingIcon from "../loading/loading";
import CommentFormContainer from '../comment/comment_form_container';
import EditCommentFormContainer from '../comment/edit_comment_form_container';

export default class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      reviews: {},
      loadingReviews: true
    };
    this.state.formType = this.props.formType;
    this.handleExit = this.handleExit.bind(this);
    this.getBusinessDetails = this.getBusinessDetails.bind(this);
    this.toggleFav = this.toggleFav.bind(this);
  }

  handleExit(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  componentWillMount() {
    this.props.fetchComments(this.props.comment.stop_id);
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
            this.setState({ reviews: reviews, loadingReviews: false });
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

  toggleFav(event) {
    event.preventDefault();
    this.props.Favorite(this.props.stopId).then(() => {
      this.props.saveFavStop(this.props.stopId);
    });
  }

  handleRating(ratingNum) {
    if (ratingNum === "1") {
      return '★ ';
    } else if (ratingNum === "2") {
      return '★★ ';
    } else if (ratingNum === "3") {
      return '★★★ ';
    } else if (ratingNum === "4") {
      return '★★★★ ';
    } else if (ratingNum === "5") {
      return '★★★★★ ';
    } else {
      return '★★★★★ ';
    }
  }

  handleDelete(event) {
    this.props.deleteComment(event.currentTarget.value).then(() => {
      this.props.fetchComments(this.props.comment.stop_id);
    });
  }

  handleEdit(event) {
    event.preventDefault();
    this.setState({
      formType: 'edit'
    });
  }

  render() {
    if (this.state.loading || this.state.loadingReviews) {
      return <LoadingIcon />;
    }
    let heartFavorite;
    let buttonType;
    if (this.props.isFavorite) {
      heartFavorite = 'hearted';
      buttonType = '♥ ';
    } else {
      heartFavorite = 'not-hearted';
      buttonType = '♡ ';
    }
  
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

    const { comments, currentUser } = this.props;
    if (comments === undefined) {
      return [];
    }

    return (
      <>
        <div
          className={this.state.loadingReviews ? "buffering" : "hidden"}
        >
          <i class="fas fa-spinner fa-spin"></i>
        </div>
        <div className="modal-header">
          <button className={heartFavorite} onClick={this.toggleFav}>
            {buttonType}
          </button>
          <div>{commentLine}</div>
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
          {this.state.formType === 'create' ? <CommentFormContainer location={this.props.stopId} key={this.props.stopId} /> : <EditCommentFormContainer />}

          <div className='show-comments-wrapper'>

            <div className='comments-header'>
              <h1>Our Users Say...</h1>
            </div>

            <ul>
              {Object.values(comments).map((comment, idx) => {
                return (
                  <>
                    <div className='comment-delete-wrapper'>
                      <li className='comment-usernames'>{comment.username} {this.handleRating(comment.rating)}</li>
                      <div>
                        {currentUser.id === comment.user_id ? <button onClick={this.handleEdit} className='comment-edit-button' value={comment._id}></button> : null}
                        {currentUser.id === comment.user_id ? <button onClick={this.handleDelete} className='comment-delete-button' value={comment._id}>X</button> : null}
                      </div>
                    </div>
                    <li className='body-comments'> {comment.body} </li>
                    <br></br>
                  </>
                );
              })}
            </ul>

          </div>
        </div>
      </>
    );
  }
}