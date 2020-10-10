import axios from "axios";

export const createComment = (data) => {
    return axios.post(`api/stops/${data.stopId}/comments`, data.comment);
};

export const fetchComments = (data) => {
    return axios.get(`api/stops/all`, data.comments);
};
