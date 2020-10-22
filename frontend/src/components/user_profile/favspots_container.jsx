import { connect } from 'react-redux';
import FavSpots from './favspots';
import { logout } from '../../actions/session_actions.js';

const mSTP = state => {
    return {
        currentUser: state.session.currentUser,
        comments: state.session.currentUser.comments
    };
};

const mDTP = dispatch => {
    return {
        logoutUser: () => dispatch(logout()),
    };
};

export default connect(mSTP, mDTP)(FavSpots);