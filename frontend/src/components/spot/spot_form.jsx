import React from 'react';

export default class SpotForm extends React.Component {
    constructor(props){
        super(props);
        this.handleExit = this.handleExit.bind(this);
    }

    handleExit(){
        this.props.closeModal();
    }

    render(){
        return(
            <div>
                <button onClick={this.handleExit}>X</button>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}