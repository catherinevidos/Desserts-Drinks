import React from 'react';

export default class BusinessItems extends React.Component{

    // componentDidMount(){
    //     this.props.openModal('spot');
    // }

    render(){
        debugger
        console.log(this.props);
        const { location } = this.props;
        return <li>{location.name}</li>;
    }
}