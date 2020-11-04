import React from 'react';
import './comments.scss';

export default class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.comment;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  componentDidMount(){
    this.setState({
      formType: this.props.formType
     })
  }

  update(field){
    return event => {
      this.setState({[field]: event.target.value});
    };
  }

  handleSubmit(event){
    event.preventDefault();
      this.props.action(this.state).then(() => {
        const comment = {
            id: '',
            body: '',
            rating: undefined,
            stop_id: this.state.stop_id,
            user_id: this.state.user_id,
            username: this.state.username,
            formType: 'create'
        }
        this.props.handleFormType('create');
        this.setState( comment )
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
              value="5"
            />
            <label for="star5" title="amazing!!">
              5 stars
            </label>
            <input
              type="radio"
              id="star4"
              name="rating"
              value="4"
            />
            <label for="star4" title="Pretty good">
              4 stars
            </label>
            <input
              type="radio"
              id="star3"
              name="rating"
              value="3"
            />
            <label for="star3" title="its ok?">
              3 stars
            </label>
            <input
              type="radio"
              id="star2"
              name="rating"
              value="2"
            />
            <label for="star2" title="not good">
              2 stars
            </label>
            <input
              type="radio"
              id="star1"
              name="rating"
              value="1"
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
      </div>
    )
  }
}