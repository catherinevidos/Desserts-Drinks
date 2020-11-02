import { connect } from 'react-redux';
import { openModal, closeModal} from '../../actions/modal_actions';
import SpotForm from './spot_form';
import { fetchAllBusinessess } from '../../actions/yelp_actions';
import { findStopId } from '../../reducers/selectors';
import { fetchAllReviews } from '../../actions/yelp_actions';
import { Favorite } from "../../actions/favorite_actions";
import {saveFavStop} from '../../actions/favorite_actions';
import { createComment, fetchComments, deleteComment} from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
  const lng =  state.ui.modal.lng;
  const lat =  state.ui.modal.lat;
  const stopId = findStopId(lat, lng, Object.values(state.stops.data));
  const isFavorite = state.session.currentUser.favStops.includes(stopId);

  return {
    lng: state.ui.modal.lng,
    lat: state.ui.modal.lat,
    stopId: stopId,
    theme: state.ui.theme.theme,
    businessess: Object.values(state.businessess),
    favStops: state.session.currentUser.favStops,
    isFavorite: isFavorite,
    currentUser: state.session.currentUser,
    comments: state.comments,
    comment: {
      body: '',
      rating: '1',
      stop_id: ownProps.location,
      user_id: state.session.currentUser.id,
      username: state.session.currentUser.username
    },
    formType: 'create',
  };
};

const mDTP = dispatch => ({
  fetchAllBusinessess: (lat, lng, searchTerm) => dispatch(fetchAllBusinessess(lat, lng, searchTerm)),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  fetchAllReviews: businessId => dispatch(fetchAllReviews(businessId)),
  Favorite: stopId => dispatch(Favorite(stopId)),
  saveFavStop: stopId => dispatch(saveFavStop(stopId)),
  action: comment => dispatch(createComment(comment)),
  fetchComments: (stopId) => {
    return dispatch(fetchComments(stopId));
  },
  deleteComment: commentId => dispatch(deleteComment(commentId)),
});

export default connect(mSTP, mDTP)(SpotForm);