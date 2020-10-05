import {
  connect
} from 'react-redux';

import Splash from './splash';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.session
  };
};

export default connect(mapStateToProps, null)(Splash);