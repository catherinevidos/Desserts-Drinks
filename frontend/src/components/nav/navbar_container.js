import {
  connect
} from 'react-redux';
import {
  logout
} from '../../actions/session_actions.js';
import Navbar from './navbar';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (
    state
  ) => {
  return {
    currentUser: state.session.user,
    loggedIn: session.isAuthenticated
  };
};


const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);