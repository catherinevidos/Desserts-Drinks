import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment, deleteComment } from '../../actions/comment_actions';


const mSTP = (state, ownProps) => {
    return {
        comment: {
            body: '',
            rating: undefined,
            stop_id: ownProps.location,
            user_id: state.session.currentUser.id,
            username: state.session.currentUser.username
        },
    };
};

const mDTP = dispatch => ({
    createComment: comment => dispatch(createComment(comment)),

});

export default connect(mSTP, mDTP)(CommentForm);