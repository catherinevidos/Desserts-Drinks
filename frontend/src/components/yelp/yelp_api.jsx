import React from 'react';
import SpotFormContainer from '../spot/spot_form_container';
const yelpApiKey = require("../../config/secret").yelpApiKey;
const API_BASE_URL = require("../../config/secret").API_BASE_URL;

export default class YelpAPI extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            business: "",
        };
        this.getBusinessDetails = this.getBusinessDetails.bind(this);
    }

    componentDidMount(){
        this.getBusinessDetails();
        this.props.openModal('spot');
    }

    getBusinessDetails() {
      let lat = this.props.lat;
      let lng = this.props.lng;
      let xmlHTTP = new XMLHttpRequest();
      //https://api.yelp.com/v3/businesses/search?term=dessert&latitude=40.7678805&longitude=-73.97103059999999
      let url =
        "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=dessert";
      url = url + "&latitude=" + `${lat}`;
      url = url + "&longitude=" + `${lng}`;
      xmlHTTP.onload = function () {
        console.log(xmlHTTP.status); // for status info
        console.log(xmlHTTP.responseType); //the type of data that was returned
        console.log(xmlHTTP.response); //the actual response. For JSON api calls, this will be a JSON string
      };
      console.log(xmlHTTP.response);
      xmlHTTP.onreadystatechange = () => {
        if  (
            xmlHTTP.status === 200 &&
            xmlHTTP.readyState === XMLHttpRequest.DONE
        )   {
            const data = JSON.parse(xmlHTTP.responseText);
            console.log(data);
            const business = Object.values(data)[0];
            this.setState({ business: business });
            }
        };
        xmlHTTP.open("GET", url, true);
        xmlHTTP.setRequestHeader("Authorization", `Bearer ${yelpApiKey}`);
        xmlHTTP.setRequestHeader("origin", "localhost");
        xmlHTTP.send();
      // this.setState({
      //     weather: xmlHTTP.response,
      // });
    }

    render(){

        return (
            <SpotFormContainer/>
        )
    }
}