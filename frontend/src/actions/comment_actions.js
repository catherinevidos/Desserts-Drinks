import * as APIUtil from '../util/comments_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

const receiveComment = comment  => ({
    type: RECEIVE_COMMENT,
    comment
});

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});

export const fetchComments = stopId => dispatch =>
  APIUtil.fetchComments(stopId).then((comments) =>
    dispatch(receiveComments(comments.data))
  );

export const createComment = comment => dispatch => {
    debugger
    return APIUtil.createComment(comment).then(comment => {
      debugger
          return dispatch(receiveComment(comment.data))});
};

// export const deleteComment = commentId => dispatch => (
//     APIUtil.deleteComment(commentId)
//         .then(commentId => dispatch(removeComment(commentId)))
// );