import axios from "axios";

// export const fetchBusiness = (lat, lng, searchTerm) => {
// return axios.post("/api/yelp/", { lat, lng, searchTerm });
// }

export const fetchBusiness = (lat, lng, searchTerm) => {
    return axios.post(`/api/yelp/allbusiness/${lat}-${lng}-${searchTerm}`);
}

// export const fetchReviews = (businesssId) => {
//     debugger
//     return axios.get(`/api/yelp/businessReviews/${businesssId}`);
// }


export const fetchReviews = (businesssId) => {
  debugger;
  return axios.get(`/api/yelp/businessReviews`, businesssId);
};