const express = require('express');
const router = express.Router();
const axios = require("axios");
const {
  yelpApiKey,
} = require("../../config/keys");
const {
  response
} = require("express");

const allBusinesses = async (lat, lng, searchTerm) => {
  let url = `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&latitude=${lat}&longitude=${lng}`;
  
  return axios({
      method: "GET",
      url: url,
      headers: {
        Authorization: `Bearer ${yelpApiKey}`,
        dataType: "json",
      },
    })
    .then((response) => {
      return response.businesses;
    })
    .catch((err) => {
      console.log(err);
    });
};

const fetchAll = async (req, res) => {
  const {lat, lng, searchTerm} = req.params 
  
  await Promise.allSettled([
    allBusinesses(lng, lat, searchTerm)
    .then((resp) => {
      res.json(resp);
    })
  ]).catch((err) => 
  console.log(err));
}
router.get('/', fetchAll);

module.exports = router;

