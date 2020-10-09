import {fetchBusiness} from '../util/yelp_util';

export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES";

const receiveAllBusinesses = businessess => {
    return {
      type: RECEIVE_ALL_BUSINESSES,
      businessess,
    };
}

export const fetchAllBusinessess = (lat, lng, searchTerm) => dispatch => {
    debugger
    return fetchBusiness(lat, lng, searchTerm).then(businessess => {
        debugger
        return dispatch(receiveAllBusinesses(businessess.data));
    })
}

