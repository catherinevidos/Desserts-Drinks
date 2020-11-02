import { connect } from 'react-redux';
import React from 'react';
import { fetchComment, editComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';
import {findComment} from '../../reducers/selectors';

class EditCommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.comment;
    }

    // componentDidMount(){
    //     return this.props.fetchComment(this.props.comment._id);
    // }

    render(){
        const { action, formType, comment } = this.props;
        return (
            <div>
                <CommentForm
                    action = {action}
                    formType = {formType}
                    comment = {comment}
                />
            </div>
        )
    }
}

const mSTP =  (state, ownProps) => {
    let comment = state.comments[findComment(state.comments, ownProps.commentId)];
    if (comment === undefined) {
        comment = state.comments[ownProps.commentId];
    }
    debugger
    return {
        comments: state.comments,
        comment: {
            id: comment._id,
            body: comment.body,
            rating: comment.rating,
            stop_id: comment.stop_id,
            user_id: comment.user_id,
            username: comment.username
        },
        formType: 'edit'
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
        fetchComment: commentId => dispatch(fetchComment(commentId)),
        action: comment => dispatch(editComment(comment)),
        handleFormType: (type) => ownProps.handleFormType(type),
    };
};

export default connect(mSTP, mDTP)(CommentForm);