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
      // res.json(response);
      return response.data.businesses;
    })
    .catch((err) => {
      console.log(err);
    });
};

const fetchAll = async (req, res) => {
  const {lat, lng, searchTerm} = req.query; 
  let businesses = [];
  await Promise.all([
    allBusinesses(lat, lng, searchTerm).then((resp) => {
      businesses = resp;
    }),
  ]).catch((err) => console.log(err));
  
  res.json(businesses);
}
router.post('/', fetchAll);

router.post('/allbusiness/:lat-:lng-:searchTerm', (req, res) => {
  const { lat, lng, searchTerm } = req.params; 
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
      res.json(response.data.businesses);
    })
    .catch((err) => {
      console.log(err);
    });
})

router.get('/businessReviews/:businessId', (req, res) => {
  const { businessId } = req.params;
  let url = `https://api.yelp.com/v3/businesses/${businessId}/reviews`;
  return axios({
    method: "GET",
    url: url,
    headers: {
      Authorization: `Bearer ${yelpApiKey}`,
      dataType: "json",
    },
  })
    .then((response) => {
      res.json(response.data.reviews);
    })
    .catch((err) => {
      console.log(err);
    });
})

module.exports = router;

