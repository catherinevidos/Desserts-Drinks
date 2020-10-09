import {
    RECEIVE_ALL_BUSINESSES
} from '../actions/yelp_actions';

export default (state = {}, action) =>{
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_BUSINESSES:
            debugger
            return Object.assign({}, state, action.businessess);

        default:
            return state;
    }
}