import axios from "axios";

export const fetchStops = () => axios.get("api/stops/");

export const fetchStop = (stopId) => axios.get(`api/stops/${stopId}`); 