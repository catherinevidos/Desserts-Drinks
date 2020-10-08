import React from 'react';

export default class BusinessItems extends React.Component{

    render(){
        debugger
        console.log(this.props);
        const { name } = this.props;
        return <li>{name}</li>;
    }
}