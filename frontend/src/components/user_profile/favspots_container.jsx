import { connect } from 'react-redux';
import FavSpots from './favspots';
import { fetchAllStops } from "../../actions/stops_actions";
import { logout } from '../../actions/session_actions.js';
import { Favorite } from "../../actions/favorite_actions";
import {saveFavStop} from '../../actions/favorite_actions';

const mSTP = state => {
    const favStops = state.session.currentUser.favStops;
    
    return {
        currentUser: state.session.currentUser,
        faves: favStops,
        stops: Object.values(state.stops)
    };
};

const mDTP = dispatch => {
    return {
        logoutUser: () => dispatch(logout()),
        fetchAllStops: () => dispatch(fetchAllStops()),
        Favorite: stopId => dispatch(Favorite(stopId)),
        saveFavStop: stopId => dispatch(saveFavStop(stopId))
    };
};

export default connect(mSTP, mDTP)(FavSpots);