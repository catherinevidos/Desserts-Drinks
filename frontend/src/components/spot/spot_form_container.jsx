import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal} from '../../actions/modal_actions';
import SpotForm from './spot_form';


// const mSTP = (state) => {
//     return {
//         business: null
//     };
// };

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});

export default connect(null, mDTP)(SpotForm);