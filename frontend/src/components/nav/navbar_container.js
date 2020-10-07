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
<<<<<<< HEAD
  };
};
=======
  }
}
>>>>>>> e8f53630202f0c07c0de5431b4f0e34d12fdb92f

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logout()),
    openModal: modal => dispatch(openModal("spot"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);