import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment, deleteComment, fetchComments } from '../../actions/comment_actions';


const mSTP = (state, ownProps) => {
    return {
        comment: {
            body: '',
            rating: '1',
            stop_id: ownProps.location,
            user_id: state.session.currentUser.id,
            username: state.session.currentUser.username
        },
        currentUser: state.session.currentUser,
        comments: state.comments,
        formType: 'create'
    };
};

const mDTP = dispatch => ({
    action: comment => dispatch(createComment(comment)),
    fetchComments: (stopId) => {
        return dispatch(fetchComments(stopId));
    },
    deleteComment: commentId => dispatch(deleteComment(commentId)),
});

export default connect(mSTP, mDTP)(CommentForm);