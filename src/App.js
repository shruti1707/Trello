import React, { Component, } from 'react';
import './App.css';
import { DB_CONFIG } from './Config/config';
import 'firebase/database';
import firebase from 'firebase/app';
import 'firebase/firestore';
import New from './components/AddNewCard/addnewcard';
import Dragg from './components/Drag/Draggable';



class App extends Component {

  

  constructor(props){
    super(props);

    this.addNewCard = this.addNewCard.bind(this);

    this.handledDragEnd = this.handledDragEnd.bind(this);

    if(!firebase.apps.length){

      firebase.initializeApp(DB_CONFIG);

    }
    
    this.database = firebase.firestore();


    this.state = {

      
        cards1 :[],
        cards2 : [],
        visible1 : 5,
        visible2 : 5,
      };


  }

 

  componentDidMount(){
    const existingcard = this.state.cards1;
    const existingcard2 = this.state.cards2;

    this.database.collection("cards1").get().then( (querySnapshot) => {
      querySnapshot.forEach( doc => {

        existingcard.push({
          id : doc.id,
          cardName : doc.data().cardName,
          cardNumber : doc.data().cardNumber,
        })

          })
        })

    this.database.collection("cards2").get().then( (querySnapshot) => {
      querySnapshot.forEach( doc => {

        existingcard2.push({
          id : doc.id, 
          cardName : doc.data().cardName,
          cardNumber : doc.data().cardNumber,
        })

          })
        })

    this.setState({
  
      cards1 : existingcard,
      cards2 : existingcard2                             
      


      
    })

    console.log(this.state.cards1)
    console.log(this.state.cards2)
    

      }



  
  

  addNewCard(cardd,cardn){


    
    
    if(cardn === "card1" || cardn === "Card1" || cardn === "CARD1" ){

      this.database.collection("cards1").add(
        {cardName : cardd , cardNumber : cardn});


        const existingcard = this.state.cards1;

        existingcard.push({
          
          cardName : cardd,
          cardNumber : cardn,
        })

        this.setState({      
          cards1 : existingcard

        })



    }


    if(cardn === "card2" || cardn === "Card2" || cardn === "CARD2"){

      this.database.collection("cards2").add(
        {cardName : cardd , cardNumber : cardn});

        const existingcard2 = this.state.cards2;



        existingcard2.push({
          
          cardName : cardd,
          cardNumber : cardn,
        })

        this.setState({
          
          cards2 : existingcard2 

  })

                        

  }

}




  handledDragEnd({destination,source}){
    console.log(destination)
    console.log(source)
    if(!destination){
      console.log("Not droppped")
      return
    }


    if(destination.index===source.index && destination.droppableId===source.droppableId){
      console.log("dropped at the same place")
      return
    }

    const existingcard = this.state.cards1;
    const existingcard2 = this.state.cards2;


    if(source.droppableId === "Card1" && source.droppableId!==destination.droppableId){
      (existingcard[source.index]).cardNumber = "Card2";
      console.log(existingcard[source.index])
      existingcard2.splice(destination.index, 0,  this.state.cards1[source.index])
      existingcard.splice(source.index,1)


    }


    if(source.droppableId === "Card1" && source.droppableId===destination.droppableId){
    
      console.log(existingcard[source.index])
      existingcard.splice(destination.index +1, 0,  this.state.cards1[source.index])
      existingcard.splice(source.index,1)


    }

    if(source.droppableId === "Card2" && source.droppableId!==destination.droppableId){
      (existingcard2[source.index]).cardNumber = "Card1";
      existingcard.splice(destination.index , 0 , this.state.cards2[source.index])
      existingcard2.splice(source.index,1)
    }

    if(source.droppableId === "Card2" && source.droppableId===destination.droppableId){
      
      existingcard2.splice(destination.index +1, 0 , this.state.cards2[source.index])
      existingcard2.splice(source.index,1)
    }


    this.setState({
      cards1 : existingcard,
      cards2 : existingcard2
    })



    console.log(this.state.cards2[destination.index])

  }



  
    


  loadMore1 = () => {
    this.setState((prev) => {
      return {visible1: prev.visible1 + 4};
    });
  }

  loadLess1 = ()  =>{
    this.setState((prev) => {
      return {visible1: prev.visible1 - 4};
    });
  }


  loadMore2 = () => {
    this.setState((prev) => {
      return {visible2: prev.visible2 + 4};
    });
  }

  loadLess2 = ()  =>{
    this.setState((prev) => {
      return {visible2: prev.visible2 - 4};
    });
  }

  


  render() { 

   
    return ( 
      <div className="App">

          <div className="Dragg">

                          
                      
          <Dragg
          handledDragEnd={this.handledDragEnd}
          cards1={this.state.cards1}
          cards2={this.state.cards2}
          visible1={this.state.visible1}
          visible2={this.state.visible2}
          loadMore1={this.loadMore1}
          loadLess1={this.loadLess1}
          loadMore2={this.loadMore2}
          loadLess2={this.loadLess2}

          />



          </div>

          <div className="Footer">
              <New  addNewCard={this.addNewCard}/>
          </div>    
        
      </div>
     );
  }
}

 
export default App;




