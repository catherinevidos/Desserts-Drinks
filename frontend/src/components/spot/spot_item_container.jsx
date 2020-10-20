import { connect } from "react-redux";
import SpotItem from "./spot_item";

const mSTP = (state, ownProps) => {
    return {
        reviews: Object.values(state.reviews),
        review: ownProps.review,
        location: ownProps.location
    };
};

export default connect(mSTP, null)(SpotItem);
