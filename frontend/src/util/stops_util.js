import axios from "axios";

export const fetchAllSpots = () => axios.get("api/stops/");

export const fetchSpot = (stopId) => axios.get(`api/stops/${stopId}`);

