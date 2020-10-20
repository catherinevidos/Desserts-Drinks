import axios from "axios";

export const createComment = (data) => {
  debugger;
//   return axios.post(`api/comments/${data.stop_id}/comments`, data);
  return axios.post(`api/comments/add`, data);
};

export const fetchComments = (stopId) => {
    return axios.get(`api/stops/all?${stopId}`);
};
