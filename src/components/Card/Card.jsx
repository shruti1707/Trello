import React, { Component } from 'react';
import './Card.css';
import PropTypes from 'prop-types';
class Card extends Component {
    constructor(props){
        super(props)
        this.state = {}
        
    }
    render() { 
        return (
    
            <div className="Card fade-in">

                    <div className="card">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{this.props.cardIndex}</li>
                        <li className="list-group-item">{this.props.cardName}</li>
                        <li className="list-group-item">{this.props.cardId}</li>
                        
                    </ul>
                    </div>

            </div>


    );
    }


}
 

Card.propTypes = {
    cardName : PropTypes.string,
    cardLetter : PropTypes.string,

    

}
export default Card;