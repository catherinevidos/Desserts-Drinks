import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions.js';
import Navbar from './navbar';
import { openModal } from '../../actions/modal_actions';
import { dessertTheme, drinksTheme } from '../../actions/theme_actions';



const mapStateToProps = ( state ) => {
  return {
    currentUser: state.session.user,
    theme: state.ui.theme.theme,
    loggedIn: state.session.isAuthenticated
  };
};


const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    dessertTheme: () => dispatch(dessertTheme()),
    drinksTheme: () => dispatch(drinksTheme())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);