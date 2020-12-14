import React, { Component } from 'react';
import './Card.css';
import PropTypes from 'prop-types';
class Card extends Component {
    constructor(props){
        super(props)
    

        this.cardIndex = props.cardIndex;
        this.cardName = props.cardName;
        this.cardId = props.cardId;
        
    }
    render(props) { 
        return (
    
            <div className="Card">

                    <div className="card fade-in">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{this.cardIndex}</li>
                        <li className="list-group-item">{this.cardName}</li>
                        
                        
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