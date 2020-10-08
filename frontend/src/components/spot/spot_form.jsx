// import React from 'react';
// import BusinessItems from './BusinessItems';
// const yelpApiKey = require("../../config/secret").yelpApiKey;
// export default class SpotForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       business: [],
//     };
//     this.handleExit = this.handleExit.bind(this);
//     this.getBusinessDetails = this.getBusinessDetails.bind(this);
//   }

//   static getDerivedStateFromProps(props, state) {
//     //   let pos = [props.lat, props.lng]
//     //   this.getBusinessDetails(pos);
//       console.log(props);
//     return {
//       business: props.business,
//     };
//   }

//   componentDidUpdate(prevProps) {
//     // if (prevProps.lat && prevProps.lng)
//     //   this.getBusinessDetails();
//     debugger
//     if (prevProps.lat !== this.props.lat || prevProps.lng !== this.props.lng) {
//       this.getBusinessDetails();
//     }
//   }

//   getBusinessDetails() {
//     let lat = this.props.lat;
//     let lng = this.props.lng;
//     let xmlHTTP = new XMLHttpRequest();
//     //https://api.yelp.com/v3/businesses/search?term=dessert&latitude=40.7678805&longitude=-73.97103059999999
//     let url =
//       "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=dessert";
//     url = url + "&latitude=" + `${lat}`;
//     url = url + "&longitude=" + `${lng}`;
//     xmlHTTP.onload = function () {
//       console.log(xmlHTTP.status); // for status info
//       console.log(xmlHTTP.responseType); //the type of data that was returned
//       console.log(xmlHTTP.response); //the actual response. For JSON api calls, this will be a JSON string
//     };
//     console.log(xmlHTTP.response);
//     xmlHTTP.onreadystatechange = () => {
//       if (
//         xmlHTTP.status === 200 &&
//         xmlHTTP.readyState === XMLHttpRequest.DONE
//       ) {
//         const data = JSON.parse(xmlHTTP.responseText);
//         console.log(data);
//         const business = Object.values(data)[0];
//         this.setState({ business: business });
//       }
//     };
//     xmlHTTP.open("GET", url, true);
//     xmlHTTP.setRequestHeader("Authorization", `Bearer ${yelpApiKey}`);
//     xmlHTTP.setRequestHeader("origin", "localhost");
//     xmlHTTP.send();
//     this.setState({
//         business: xmlHTTP.response,
//     });
//   }

//   handleExit(e) {
//     e.preventDefault();
//     this.props.closeModal();
//   }
//   render() {
//       debugger
//     if (!this.state.business) { return null; } 
//     const allBusiness = this.state.business.map((location) => {
//             return <BusinessItems 
//                         location={location} 
//                         key={location.id} 
//                     />;
//           })
//     return (
//       <div className="spot-form">
//         <h1>This is a modal</h1>
//         <button onClick={() => this.handleExit}>X</button>
//         <ul>{allBusiness}</ul>
//       </div>
//     );
//   }
// }

import React from 'react';
import BusinessItems from './BusinessItems';
import $ from 'jquery';

const yelpApiKey = require("../../config/secret").yelpApiKey;

export default class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      business: "",
    };
    this.handleExit = this.handleExit.bind(this);
    this.getBusinessDetails = this.getBusinessDetails.bind(this);
  }

  handleExit(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  componentDidMount() {
      this.getBusinessDetails();
      this.props.openModal('spot');
  }

    componentDidUpdate(prevProps) {
      // if (prevProps.lat && prevProps.lng)
      //   this.getBusinessDetails();
      if (prevProps.lat !== this.props.lat || prevProps.lng !== this.props.lng) {
          this.getBusinessDetails();
        //     this.getBusinessDetails().then(business => {
        //         this.setState({ business: business });
        // })
      }
    }

  getBusinessDetails() {
    let lat = this.props.lat;
    let lng = this.props.lng;
    //https://api.yelp.com/v3/businesses/search?term=dessert&latitude=40.7678805&longitude=-73.97103059999999
    let url =
      "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=dessert";
    url = url + "&latitude=" + `${lat}`;
    url = url + "&longitude=" + `${lng}`;
    debugger
    let that = this;
    $.ajax({
      url: url,
      headers: {
        Authorization: `Bearer ${yelpApiKey}`,
      },
      method: "GET",
      dataType: "json",
      success: function (data) {
            debugger
            that.setState({ business: data.businesses });
        }
    })
  }

  render() {
      debugger

      if (this.state.business === "") { return null;}
        const all = this.state.business.map((location) => {
        debugger
        return <BusinessItems 
                    location={location} 
                    key={location.id}
                    openModal={this.props.openModal}
                />;
    })
    return (
      <div>
        <h1>Donuts around you</h1>
        <button onClick={this.handleExit}>X</button>
        {this.state.business === "" ? <p>No business yet</p> : <ul>{all}</ul>}
        {/* <ul>{all}</ul> */}
      </div>
    );
  }
}