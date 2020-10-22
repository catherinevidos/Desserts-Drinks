import axios from "axios";

export const createComment = (data) => {
  return axios.post(`api/comments/add`, data);
};

export const fetchComments = (stopId) => {
    return axios.get(`api/comments/all?${stopId}`);
};

export const deleteComment = (id) => {
  return axios.delete(`api/comments/delete?id=${id}`);
};
