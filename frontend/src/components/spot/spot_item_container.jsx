import { connect } from "react-redux";
import SpotItem from "./spot_item";
import { fetchAllReviews } from "../../actions/yelp_actions";

const mSTP = (state, ownProps) => {
    return {
        reviews: Object.values(state.reviews),
        location: ownProps.location
    };
};

const mDTP = (dispatch) => {
    return {
        fetchAllReviews: (businesssId) => dispatch(fetchAllReviews(businesssId)),
    };
};

export default connect(mSTP, mDTP)(SpotItem);
