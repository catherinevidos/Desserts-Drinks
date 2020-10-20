import { connect } from 'react-redux';
import FavSpots from './favspots';

const mSTP = state => {
    return {
        currentUser: state.session.currentUser
    };
};

const mDTP = dispatch => {
    return {

    };
};

export default connect(mSTP, mDTP)(FavSpots);