import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

const CommentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            return Object.assign({}, state, {
              [action.comment._id]: action.comment,
            });
        case REMOVE_COMMENT:
            delete newState[action.commentId];
            return newState;

        default:
            return state;
    }
};

export default CommentsReducer;