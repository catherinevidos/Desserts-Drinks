import { connect } from 'react-redux';
import React from 'react';
import { fetchComment, editComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

class EditCommentForm extends React.Component{

    componentDidMount(){
        return this.props.fetchComment(this.props.match.params.commentId);
    }

    render(){
        const { action, formType, comment } = this.props;
        return (
            <CommentForm
                action = {action}
                formType = {formType}
                comment = {comment}
            />
        )
    }
}

const mSTP =  (state, ownProps) => {
    return {
        comment: state.comments[ownProps.match.params.commentId],
        formType: 'edit'
    };
};

const mDTP = dispatch => {
    return {
        fetchComment: commentId => dispatch(fetchComment(commentId)),
        action: comment => dispatch(editComment(comment))
    };
};

export default connect(mSTP, mDTP)(EditCommentForm);