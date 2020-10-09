import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';


const mSTP = state => ({
    comment: {
        body: '',
        rating: null,
        stop_id: state.stops.id,
        user_id: state.session.user.id
    }
});

const mDTP = dispatch => ({
    createComment: comment => dispatch(createComment(comment))
});

export default connect(mSTP, mDTP)(CommentForm);