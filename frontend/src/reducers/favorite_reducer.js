import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favorite_actions';

export default (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case ADD_FAVORITE:
            return action.stopId
            
        default:
            return state;
    }
}