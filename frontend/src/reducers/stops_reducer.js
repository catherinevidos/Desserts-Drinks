import {
  RECEIVE_STOPS,
  RECEIVE_STOP,
} from "../actions/stops_actions";

const stopsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_STOPS:
      return action.stops;
    case RECEIVE_STOP:
      newState[action.stop.id] = action.stop;
      return newState;
    default:
      return state;
  }
};

export default stopsReducer;
