import {connect} from 'react-redux';
import {loginUser} from '';
import Login from './login';

const mapStateToProps = state => {
 return {
  currentUser: state.session.currentUser, 
  errors: state.errors.session 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => dispatch(loginUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);