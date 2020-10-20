import React from 'react';

export default class CommentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return event => this.setState({[field]: event.currentTarget.value});
    }

    handleSubmit(event){
        event.preventDefault();
        let comment = {
            body: this.state.body,
            rating: parseInt(this.state.rating),
            stop_id: this.props.comment.stop_id,
            user_id: this.state.user_id,
            username: this.state.username
        };
        this.props.createComment(comment);
    }

    render(){

        return(
            <div>
                <div>
                    <h1>Add a Comment!</h1>
                </div>
                <br/><br/>
                <form onSubmit={this.handleSubmit}>
                    <label>{this.state.username}</label>
                    <br/><br/>
                    <label>Comment:
                        <textarea 
                            cols="40" 
                            rows="3"
                            value={this.state.body}
                            onChange={this.update('body')}
                            placeholder='Tell everyone about your experiences!'
                            required
                        />
                    </label>
                    <br/><br/>
                    <label>Rating:
                        <input 
                            type="number"
                            value={this.state.rating}
                            onChange={this.update('rating')}
                            required
                        />
                    </label>
                    <br/><br/>
                    <button type='submit'>Create Comment</button>
                </form>
            </div>
        )
    }
}