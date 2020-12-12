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

      items : {
        cards1 :[],
        cards2 : [],
      },
      
      
      visible : 1
      
    }

    this.loadMore = this.loadMore.bind(this);

    this.loadLess = this.loadLess.bind(this);
  }

  
  

  addNewCard(cardd,cardn){
    if(cardn === "Card1"){

      this.database.collection("cards1").add(
        {cardName : cardd , cardNumber : cardn});

    }
    if(cardn === "Card2"){

      this.database.collection("cards2").add(
        {cardName : cardd , cardNumber : cardn});

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

    const existingcard = this.state.items.cards1;
    const existingcard2 = this.state.items.cards2;


    if(source.droppableId === "Card1"){
      (existingcard[source.index]).cardNumber = "Card2";
      console.log(existingcard[source.index])
      existingcard2.splice(destination.index, 0,  this.state.cards1[source.index])
      existingcard.splice(source.index,1)


    }

    if(source.droppableId === "Card2"){
      (existingcard2[source.index]).cardNumber = "Card1";
      existingcard.splice(destination.index , 0 , this.state.cards2[source.index])
      existingcard2.splice(source.index,1)
    }


    this.setState({
      cards1 : existingcard,
      cards2 : existingcard2
    })



    console.log(this.state.cards2[destination.index])

  }



  
    


  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 4};
    });
  }

  loadLess() {
    this.setState((prev) => {
      return {visible: prev.visible - 4};
    });
  }


  componentDidMount(){
    const existingcard = this.state.items.cards1;
    const existingcard2 = this.state.items.cards2;

    this.database.collection("cards1").get().then( snap => {
      snap.forEach( doc => {

        existingcard.push({
          id : doc.id,
          cardName : doc.data().cardName,
          cardNumber : doc.data().cardNumber,
        })

          })
        })

    this.database.collection("cards2").get().then( snap => {
      snap.forEach( doc => {

        existingcard2.push({
          id : doc.id, 
          cardName : doc.data().cardName,
          cardNumber : doc.data().cardNumber,
        })

          })
        })

    this.setState({
      cards1 : existingcard,
      cards2 : existingcard2,
    })

        console.log(this.state.items.cards1)
        console.log(this.state.items.cards2)

      }




  render() { 
    return ( 
      <div className="App">

          <div className="Footer">
              <New  addNewCard={this.addNewCard}/>
          </div>
          <div className="Dragg">

                
            
                <Dragg
                handledDragEnd={this.handledDragEnd}
                 cards1={this.state.items.cards1}
                 cards2={this.state.items.cards2}
                 visible={this.state.visible}
                 loadMore={this.loadMore}
                 loadLess={this.loadLess}
                 />  


          </div>
                        

          
        
      </div>
     );
  }
}
 
export default App;




