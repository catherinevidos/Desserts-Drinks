import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import './modal.scss';
import SpotFormContainer from '../spot/spot_form_container';
import YelpAPI from '../yelp/yelp_api';

function Modal({ modal, closeModal }) {

    if(!modal){
        return null;
    }

    let component;

    switch (modal) {
        case "spot":
            component = <SpotFormContainer/>;
            break;
        default:
            return null;
    }
    return (
        <div className='modal-background' onClick={closeModal}>
            <div className='modal-child' onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )

}

const mSTP = state => ({
    modal: state.ui.modal
})

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Modal);