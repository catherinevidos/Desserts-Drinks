import {
  connect
} from 'react-redux';
import {
  signup
} from '../../actions/session_actions.js';
import Signup from './signup';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.session
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signupUser: user => dispatch(signup(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);