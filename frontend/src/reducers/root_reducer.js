import { combineReducers } from "redux";
import { sessionReducer } from "./session_reducer";
import { errorsReducer } from "./errors_reducer";
import { usersReducer } from "./users_reducer";
import stopsReducer from "./stops_reducer";
import { uiReducer } from './ui_reducer';
import yelpReducer from './yelp_reducer';
import reviewRedcuer from './reviews_reducer';
import CommentsReducer from "./comments_reducer";

const rootReducer = combineReducers({
  users: usersReducer,
  stops: stopsReducer,
  session: sessionReducer,
  ui: uiReducer,
  errors: errorsReducer,
  businessess: yelpReducer,
  reviews: reviewRedcuer,
  comments: CommentsReducer
});

export default rootReducer;
