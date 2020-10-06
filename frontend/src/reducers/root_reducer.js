import { combineReducers } from 'redux';
import { sessionReducer } from './session_reducer';
import { errorsReducer } from './errors_reducer';
import { usersReducer } from "./users_reducer";
import stopsReducer from "./stops_reducer";

    users: usersReducer,
    stops: stopsReducer
});

export default rootReducer;