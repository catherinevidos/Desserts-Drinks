import {connect} from 'react-redux';
import { login, clearErrors } from "../../actions/session_actions.js";
import Login from './login';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
 return {
  errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    openModal: modal => dispatch(openModal(modal)), 
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);