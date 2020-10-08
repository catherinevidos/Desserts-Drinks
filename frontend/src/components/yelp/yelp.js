import queryString from 'query-string';
const yelpApiKey = require("../../config/secret").yelpApiKey;
const API_BASE_URL = require("../../config/secret").API_BASE_URL

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams);
    return fetch(`${API_BASE_URL}`, {
        headers: {
            Authorization: `Bearer ${yelpApiKey}`,
            Origin: 'localhost',
            withCredentials: true, 
        }
    })
}