import {connect} from 'react-redux';
import { login } from "../../actions/session_actions.js";
import Login from './login';

const mapStateToProps = state => {
 return {
  currentUser: state.session.currentUser, 
  errors: state.errors.session 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => dispatch(login(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);