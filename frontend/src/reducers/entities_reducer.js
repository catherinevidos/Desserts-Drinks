import { combineReducers } from 'redux';
import { usersReducer } from './users_reducer';
import  stopsReducer  from "./stops_reducer";

export const entitiesReducer = combineReducers({
    users: usersReducer,
    stops: stopsReducer
});