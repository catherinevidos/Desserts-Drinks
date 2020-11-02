import * as APIUtil from '../util/comments_util';

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

const removeComment = commentId => {
  return {
    type: REMOVE_COMMENT,
    commentId
  };
};

export const fetchComments = stopId => dispatch =>
  APIUtil.fetchComments(stopId).then((comments) =>
    dispatch(receiveComments(comments.data))
  );

export const createComment = comment => dispatch => {
  return APIUtil.createComment(comment).then(comment => {
    return dispatch(receiveComment(comment.data));
  });
};

export const deleteComment = commentId => dispatch => {
  const comment_id = commentId;
   return APIUtil.deleteComment(commentId).then(response => {
     return dispatch(removeComment(comment_id));});
};

export const editComment = comment => dispatch => {
  return APIUtil.editComment(comment).then(comment => {
    return dispatch(receiveComment(comment.data));
  });
};

export const fetchComment = commentId => dispatch => {
  return APIUtil.fetchComment(commentId).then(comment => {
    return dispatch(receiveComment(comment));
  });
};