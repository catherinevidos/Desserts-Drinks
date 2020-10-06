import {connect} from 'react-redux';
import { login, clearErrors } from "../../actions/session_actions.js";
import Login from './login';

const mapStateToProps = state => {
 return {
  errors: state.errors.session
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);