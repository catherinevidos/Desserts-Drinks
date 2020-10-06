import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';

export const errorsReducer = combineReducers({
    session: SessionErrorsReducer
});