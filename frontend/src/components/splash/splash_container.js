import {
  connect
} from 'react-redux';
import { openModal } from '../../actions/modal_actions';

import Splash from './splash';

const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    errors: state.session.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
