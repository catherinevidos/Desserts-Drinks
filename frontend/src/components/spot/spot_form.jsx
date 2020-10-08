import React from 'react';
import BusinessItems from './BusinessItems';

export default class SpotForm extends React.Component {
    constructor(props){
        super(props);

        this.handleExit = this.handleExit.bind(this);
    }

    componentDidMount(){
   
    }

    componentDidUpdate(){ 
        
    }

    handleExit(e){
        e.preventDefault();
        this.props.closeModal();
    }
    // Have i told you you look sexy today 
    render(){
        if (this.props.business === undefined) {
            return <div>THERES NOTHING HERE</div>;
        }
        console.log(this.props.business);
        return(
            <div>
                <button onClick={this.handleExit}>X</button>
                {this.props.business.map(location => {
                    return <BusinessItems
                        location={location}
                        key={location.id}
                    />
                })}
            </div>
        )
    }
}