import { connect } from "react-redux";
import { fetchAllStops } from "../../actions/stops_actions";
import WebMap from "./map";

const mSTP = (state) => {
  // debugger
  return {
    stops: Object.values(state.entities.stops),
  };
};

const mDTP = (dispatch) => {
  return {
    fetchAllStops: () => dispatch(fetchAllStops()),
  };
};

export default connect(mSTP, mDTP)(WebMap);
