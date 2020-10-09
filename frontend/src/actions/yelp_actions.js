import { fetchBusiness, fetchReviews } from "../util/yelp_util";

export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES";
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";

const receiveAllBusinesses = businessess => {
    return {
      type: RECEIVE_ALL_BUSINESSES,
      businessess,
    };
}

const receiveAllReviews = (reviews) => {
  return {
    type: RECEIVE_ALL_REVIEWS,
    reviews,
  };
};

export const fetchAllBusinessess = (lat, lng, searchTerm) => dispatch => {
  return fetchBusiness(lat, lng, searchTerm).then(businessess => {
    return dispatch(receiveAllBusinesses(businessess.data));
  })
}

export const fetchAllReviews = (businessId) => (dispatch) => {
  debugger;
  return fetchReviews(businessId).then((reviews) => {
    debugger;
    return dispatch(receiveAllReviews(reviews.data));
  });
};