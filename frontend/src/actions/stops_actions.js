import { fetchStops, fetchStop } from "../util/stops_util";

export const RECEIVE_STOPS = "RECEIVE_STOPS";
export const RECEIVE_STOP = "RECEIVE_STOP";

const receiveStops = (stops) => ({
    type: RECEIVE_STOPS,
    stops
});

const receiveStop = (stop) => ({
    type: RECEIVE_STOP,
    stop
});

export const fetchAllStops = () => (dispatch) =>
  fetchStops().then((stops) => dispatch(receiveStops(stops)));

export const fetchAStop = (stopId) => (dispatch) =>
  fetchStop(stopId).then((stop) => dispatch(receiveStop(stop)));
