import * as APIUtil from '../util/favorite_util';
import {receiveCurrentUser} from './session_actions';

export const ADD_FAVORITE = "ADD_FAVORITE";

const receiveFavorite = stopId => {
    return {
      type: ADD_FAVORITE,
      stopId
    };
}

export const Favorite = stopId => dispatch => {
    return APIUtil.addFavorite(stopId).then((favorite) => {
        return dispatch(receiveFavorite(favorite.data));
    })
}

export const saveFavStop = stopId => dispatch => {
    return APIUtil.saveFavStop(stopId).then(user => {
        return dispatch(receiveCurrentUser(user.data));
    })
}