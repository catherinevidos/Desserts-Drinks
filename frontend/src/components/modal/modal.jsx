import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import './modal.scss';
import SpotFormContainer from '../spot/spot_form_container';

function Modal({ modal, closeModal }) {

    if(!modal){
        return null;
    }

    let component;

    switch (modal) {
        case "spot":
            component = <YelpAPI/>;
            break;
        default:
            return null;
    }
    return (
        <div className='modal-background' onClick={closeModal}>
            <div className='modal-child' onClick={e => e.stopPropagation()}>
                <div>
                    { component }
                </div>
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