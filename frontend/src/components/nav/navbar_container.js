import {
  connect
} from 'react-redux';
import {
  logout
} from '../../actions/session_actions.js';
import Navbar from './navbar';

const mapStateToProps = ({
    session,
    entities
  }) => {
  return {
    currentUser: session && session.id && entities.users[session.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);