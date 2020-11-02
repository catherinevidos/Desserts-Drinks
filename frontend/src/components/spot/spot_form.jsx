import React from 'react';
import SpotItemContainer from './spot_item_container';
import './spot.scss';
import $ from "jquery";
import LoadingIcon from "../loading/loading";
import CommentFormContainer from '../comment/comment_form_container';
import EditCommentFormContainer from '../comment/edit_comment_form_container';

export default class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      reviews: {},
      loadingReviews: true,
      formType: this.props.formType,
      commentId: ''
    };
    // this.state.formType = this.props.formType;
    this.handleDelete = this.handleDelete.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.getBusinessDetails = this.getBusinessDetails.bind(this);
    this.toggleFav = this.toggleFav.bind(this);
    this.handleFormType = this.handleFormType.bind(this);
  }

  handleExit(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  componentWillMount() {
    this.props.fetchComments(this.props.stopId);
  }

  handleFormType(type){
    this.setState({ 
      formType: type
    })
  }

  componentDidMount(){
    this.props.fetchComments(this.props.stopId);
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
    debugger
    this.props.deleteComment(event.currentTarget.value).then(() => {
      this.setState({  formType: 'create' })
      this.props.fetchComments(this.props.stopId);
    });
  }

  handleEdit(event, id) {
    debugger
    debugger
    const x = Math.abs($('#form-container').offset().top + $('#form-container').position().top)
    // window.scroll(x, y);
    $('.modal-child').scrollTop(x);
    // $('#form-container').scrollTop(0);
    debugger
    event.preventDefault();
    this.setState({
      formType: 'edit',
      commentId: id
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
    console.log(this.props);
    let modalBackground;
    let commentLine;
    if (this.props.theme === "Desserts") {
      commentLine = (
      <h1 className="index-dessert">{`Desserts around ${this.props.stopName}`}</h1>
      );
      modalBackground = 'modal-header'
    } else {
      commentLine = (
        <h1 className="index-drink">{`Drinks around ${this.props.stopName}`}</h1>
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
          <i className="fas fa-spinner fa-spin"></i>
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
            <div id="form-container">
              {this.state.formType === 'create' ? <CommentFormContainer location={this.props.stopId} key={this.props.stopId} handleFormType={this.handleFormType}/> : <EditCommentFormContainer commentId={this.state.commentId} handleFormType={this.handleFormType}/>}
            </div>
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
                        {currentUser.id === comment.user_id ? <button onClick={e => this.handleEdit(e, comment._id)} className='comment-edit-button' value={comment._id}></button> : null}
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