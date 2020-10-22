import { connect } from 'react-redux';
import FavSpots from './favspots';
import { fetchAllStops } from "../../actions/stops_actions";
import { logout } from '../../actions/session_actions.js';

const mSTP = state => {
    // const stopInfo = Object.values(state.stops.data).map(stop => {
    //     debugger
    //     let stopObj;
    //     if (stop._id.includes(state.session.currentUser.faveSpots)) {
    //         stopObj = {name: stop.name, color: stop.color}
    //     }
    //     return stopObj;
    // })

    return {
        currentUser: state.session.currentUser,
        faves: state.session.currentUser.faveSpots,
        stops: Object.values(state.stops)
    };
};

const mDTP = dispatch => {
    return {
        logoutUser: () => dispatch(logout()),
        fetchAllStops: () => dispatch(fetchAllStops()),
    };
};

export default connect(mSTP, mDTP)(FavSpots);