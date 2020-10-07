import {
  connect
} from 'react-redux';
import { openModal } from '../../actions/modal_actions';

import Splash from './splash';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    errors: state.session.errors
  };
};

<<<<<<< HEAD
const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Splash);
=======


export default connect(mapStateToProps, null)(Splash);
>>>>>>> e8f53630202f0c07c0de5431b4f0e34d12fdb92f
