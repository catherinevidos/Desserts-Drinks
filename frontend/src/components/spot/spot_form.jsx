import React from 'react';
import BusinessItems from './BusinessItems';

export default class SpotForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            business: []
        };
        this.handleExit = this.handleExit.bind(this);
    }

    static getDerivedStateFromProps(props, state){
        return {
            business: props.business
        };
    }
    
    handleExit(e){
        e.preventDefault();
        this.props.closeModal();
    }
    render(){

        return(
            <div>
                <button onClick={this.handleExit}>X</button>
                {this.state.business && this.state.business.map(location => {
                    return <BusinessItems
                        location={location}
                        key={location.id}
                    />
                })}
            </div>
        )
    }
}