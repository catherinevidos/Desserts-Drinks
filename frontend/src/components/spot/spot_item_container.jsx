import { connect } from "react-redux";
import SpotItem from "./spot_item";
import { fetchAllReviews } from "../../actions/yelp_actions";

const mSTP = (state, ownProps) => {
    debugger
    console.log(ownProps)
  return {
    reviews: Object.values(state.reviews),
    location: ownProps.location
  };
};

const mDTP = (dispatch) => ({
  fetchAllReviews: (businesssId) =>
    dispatch(fetchAllReviews(businesssId)),
});

export default connect(mSTP, mDTP)(SpotItem);
