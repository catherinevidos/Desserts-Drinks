import {
  connect
} from 'react-redux';
import {
  signupUser
} from '';
import Splash from './splash';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.session
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default connect(mapStateToProps, null)(Splash);