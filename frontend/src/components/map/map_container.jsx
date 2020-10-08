import { connect } from "react-redux";
import { fetchAllStops } from "../../actions/stops_actions";
import { openModal } from '../../actions/modal_actions';
import WebMap from "./map";

const mSTP = (state) => {
  return {
    stops: Object.values(state.stops),
    currentUser: state.session.currentUser
  };
};

const mDTP = (dispatch) => {
  return {
    fetchAllStops: () => dispatch(fetchAllStops()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mSTP, mDTP)(WebMap);
