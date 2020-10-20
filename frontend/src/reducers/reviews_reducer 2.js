import {
  RECEIVE_ALL_REVIEWS,
} from "../actions/yelp_actions";

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return Object.assign({}, state, action.reviews);
    default:
      return state;
  }
};
