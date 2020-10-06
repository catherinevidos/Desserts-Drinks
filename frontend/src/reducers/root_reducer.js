import { combineReducers } from 'redux';
import { sessionReducer } from './session_reducer';
import { errorsReducer } from './errors_reducer';
import { usersReducer } from "./users_reducer";
import stopsReducer from "./stops_reducer";


const rootReducer = combineReducers({
    users: usersReducer,
    stops: stopsReducer,
    session: sessionReducer,
    errors: errorsReducer
});

export default rootReducer;