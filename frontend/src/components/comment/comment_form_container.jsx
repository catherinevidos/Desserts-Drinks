import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment, deleteComment, fetchComments } from '../../actions/comment_actions';


const mSTP = (state, ownProps) => {
    return {
        comment: {
            body: '',
            rating: undefined,
            stop_id: ownProps.location,
            user_id: state.session.currentUser.id,
            username: state.session.currentUser.username
        },
        comments: state.comments.data
    };
};

const mDTP = dispatch => ({
    createComment: comment => dispatch(createComment(comment)),
    fetchComments: (stopId) => {
        return dispatch(fetchComments(stopId));
    },
    deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(mSTP, mDTP)(CommentForm);