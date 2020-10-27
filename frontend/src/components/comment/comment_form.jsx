import React from 'react';
import './comments.scss';

export default class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.comment;
    this.state.formType = this.props.formType;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  update(field){
    return event => {
      this.setState({[field]: event.target.value});
    };
  }

  componentWillMount(){
    this.props.fetchComments(this.props.comment.stop_id);
  }

  handleDelete(e) {
    this.props.deleteComment(e.currentTarget.value).then(() => {
      this.props.fetchComments(this.props.comment.stop_id);
    });
  }

  // handleEdit(event){
  //   event.preventDefault();
  //   this.state.formType = 'edit';
  //   this.handleSubmit(event);
  // }

  // handleDelete(event){
  //   event.preventDefault();
  //   this.state.formType = 'delete';
  //   this.handleSubmit(event);
  // }

  handleSubmit(event){
    event.preventDefault();

    if (this.state.formType === 'create') {
      let comment = {
        body: this.state.body,
        rating: this.state.rating,
        stop_id: this.props.comment.stop_id,
        user_id: this.state.user_id,
        username: this.state.username
      };
      this.props.action(comment).then(() => {
        this.setState( this.props.comment );
      });
    } else if (this.state.formType === 'edit'){
      let comment = {
        body: this.state.body,
        rating: this.state.rating,
        stop_id: this.props.comment.stop_id,
        user_id: this.state.user_id,
        username: this.state.username
      };
      this.props.action(comment).then(() => {
        this.setState( this.props.comment );
      });
    }
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

  render(){
    const { comments, currentUser } = this.props;
    if (comments === undefined) {
      return [];
    }
    
    return (
      <div className="comments-wrapper">

        <div className="comments-header-wrapper">
          <div className="comments-header">
            <h1>Leave a Comment</h1>
          </div>
        </div>

        <form className="comment-form" onSubmit={this.handleSubmit}>
          <div className="username-field">
            Username:
            <label>{this.state.username}</label>
          </div>
          <br></br>
          <fieldset className="rating" onChange={this.update("rating")}>
            <legend>Rating:</legend>
            <input
              type="radio"
              id="star5"
              name="rating"
              value={this.state.rating}
            />
            <label for="star5" title="amazing!!">
              5 stars
            </label>
            <input
              type="radio"
              id="star4"
              name="rating"
              value={this.state.rating}
            />
            <label for="star4" title="Pretty good">
              4 stars
            </label>
            <input
              type="radio"
              id="star3"
              name="rating"
              value={this.state.rating}
            />
            <label for="star3" title="its ok?">
              3 stars
            </label>
            <input
              type="radio"
              id="star2"
              name="rating"
              value={this.state.rating}
            />
            <label for="star2" title="not good">
              2 stars
            </label>
            <input
              type="radio"
              id="star1"
              name="rating"
              value={this.state.rating}
            />
            <label for="star1" title="really bad">
              1 star
            </label>
          </fieldset>
          <br></br>
          <br></br>
          <label className='comment-textarea-label'>Comment:
          </label>
          <br></br>
          <br></br>
            <textarea 
                cols="40" 
                rows="3"
                value={this.state.body}
                onChange={this.update('body')}
                placeholder='Tell everyone about your experiences!'
                required
                className='comment-textarea'
            />
          <br></br>
          <button className='comment-submit' type='submit'>Submit Comment</button>
        </form>
            
        {/* <div className='show-comments-wrapper'>

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

        </div> */}
      </div>
    )
  }
}