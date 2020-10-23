# Desserts & Drinks

[Dessets&Drinks](https://dessertsanddrinks.herokuapp.com/)

***

## Introduction

Dessert & Drinks is a treat lover's dream come true. Users are able to interact with the map to choose a train stop amoung the marked ones and get an up-to-date list of all locations that will either provide the user with the best desserts or drinks within the local vicinity. The site was built on a Mongoose/MongoDB backend and React/ Redux on the frontend to bring to the site to life. 

![Homepage](frontend/public/DandDPic.png)

***

## Features

* User are able to interact with a map to choose any one of the provide locations.
* Our backend is secured through the use of BCrypt and SecureRandom for user authentication.
* Users can post comments about eateries around the stops to ensure that future riders know whats good and what to miss on their travels!
* Users can dynamically choose a theme of either Desserts/Drinks to suit their needs and the search results will change accordingly!
* Users can mark/unmark a subway stop as favorite, the web App dynamically pulls current users information avoiding the need the hard refresh

***
Users can change theme to dynamically update
* markers on map
* search result
* overall outlook of the app

Desserts theme:
![Desserts](https://i.imgur.com/ch0A1fS.png)

Drinks theme:
![Drinks](https://i.imgur.com/d6wSRUp.png)

## Team Member
* Catherine Vidos - Team Lead
* Jonathan Calixto - FrontEnd Lead
* Rachana Vishwanath - Backend Lead, Flex
* Adel Qudsi - Flex

## Technologies and Technical Challenges

DessertsandDrinks is built using React, Redux, MongoDB, Mongoose, YelpAPI, Google Maps API, Node.js, CSS, axios. It fetches data from 
* [Google maps API](https://developers.google.com/maps/documentation/javascript/overview)
* [Yelp API](https://www.yelp.com/developers/documentation/v3)

Major technical challenge during this project was making ajax calls to yelp API from frontend, the browser was blocking the requests to a different domain due to security concerns. Our fix was to build a build a custom route in backend which the frontend utilizes to make calls to Yelp API.

```
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

```




