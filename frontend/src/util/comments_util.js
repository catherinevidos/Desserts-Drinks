import axios from "axios";

export const createComment = (data) => {
    return axios.post(`api/stops/${data.stopId}/comments`, data.comment);
}