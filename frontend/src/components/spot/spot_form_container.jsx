import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal} from '../../actions/modal_actions';
import SpotForm from './spot_form';


const mSTP = (state, ownProps) => ({
  lng: state.ui.modal.lng,
  lat: state.ui.modal.lat,
});

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SpotForm);