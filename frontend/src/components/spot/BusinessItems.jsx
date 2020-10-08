import React from 'react';

export default class BusinessItems extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { name } = this.props.location;
        return(
            <div>
                {name}
            </div>
        )
    }
}

            // <li>PLEASE WORK</li>
            // <li>
            //     {location.image_url}

            //     {location.price}
            //     {location.display_phone}
            //     {location.rating}
            // </li>