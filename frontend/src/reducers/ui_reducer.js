import { combineReducers } from 'redux';
import ModalReducer from './modal_reducer';
import ThemeReducer from './theme_reducer';

export const uiReducer = combineReducers({
  modal: ModalReducer,
  theme: ThemeReducer
});

// export default uiReducer;