import { connect } from 'react-redux';
import Splash from './splash';
import { openModal } from '../../actions/modal_actions';
import { dessertTheme, drinksTheme} from '../../actions/theme_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    theme: state.ui.theme.theme,
    errors: state.session.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    dessertTheme: () => dispatch(dessertTheme()),
    drinksTheme: () => dispatch(drinksTheme())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
