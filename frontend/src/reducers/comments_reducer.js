import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import {findComment} from './selectors';

const CommentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            const idx = findComment(newState, action.comment._id);
            if (idx === undefined) {
                return Object.assign({}, newState, {
                    [action.comment._id]: action.comment,
                });
            } else if (state.hasOwnProperty(action.comment._id)){
                newState[action.comment._id] = action.comment;
                return Object.assign({}, newState);
            } else {
                newState[idx] = action.comment
                return Object.assign({}, newState);
            }
            
        case REMOVE_COMMENT:
            
            delete newState[action.commentId];
            return newState;
            
        default:
            return state;
    }
};

export default CommentsReducer;