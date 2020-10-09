import { connect } from 'react-redux';
import { openModal, closeModal} from '../../actions/modal_actions';
import SpotForm from './spot_form';
import { fetchAllBusinessess } from '../../actions/yelp_actions';

const mSTP = (state, ownProps) => {
  debugger 
  return {
    lng: state.ui.modal.lng,
    lat: state.ui.modal.lat,
    theme: state.ui.theme.theme,
    businessess: Object.values(state.businessess),
  }
 
};

const mDTP = dispatch => ({
    fetchAllBusinessess: (lat, lng, searchTerm) => dispatch(fetchAllBusinessess(lat, lng, searchTerm)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SpotForm);