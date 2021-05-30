import React, { Component } from 'react';
import './addnewcard.css';

class New extends Component {
    constructor(props){
        super(props);

        this.changeinput = this.changeinput.bind(this);
        this.changeinput2 = this.changeinput2.bind(this);

        this.handleinput = this.handleinput.bind(this);

       
        this.state = {

            newCardName : '',
            CardNumber : '',
        };
    }


    handleinput(){


        this.props.addNewCard(this.state.newCardName,this.state.CardNumber);

        // remaking the new card empty
        this.setState({
            newCardName : '',
            CardNumber : '',
        })

    }
    changeinput(v){
        this.setState({
            newCardName : v.target.value,

        })
    }

    changeinput2(v){
        this.setState({
            CardNumber : v.target.value,
        })
    }


    render(props) { 
        return ( 
            <div className="New">
                <input className="newcardinput" placeholder="Add New Card Name" value={this.state.newCardName} onChange={this.changeinput}/>
                <input className="cardname" placeholder="Card1/Card2" value={this.state.CardNumber} onChange={this.changeinput2}/> 
                <button className = "newbutton" onClick={this.handleinput}>Add </button>


            </div>
         );
    }
}
 
export default New;


