import {
  connect
} from 'react-redux';
import {
  logout
} from '../../actions/session_actions.js';
import Navbar from './navbar';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({
    session,
    entities
  }) => {
  return {
    currentUser: session && session.id && entities.users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logout()),
    openModal: modal => dispatch(openModal("spot"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);