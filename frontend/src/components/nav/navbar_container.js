import {
  connect
} from 'react-redux';
import {
  logout
} from '../../src/actions/session_actions.js';
import Navbar from './navbar';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);