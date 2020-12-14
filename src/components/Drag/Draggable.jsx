import React, { Component } from 'react';
import { DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'; 
import Card from '../Card/Card';
import './Draggable.css'


class Dragg extends Component {
  constructor(props){
    super(props);

    this.state= {}



  }

  // componentDidMount(){
  //   this.props.write();
  // }

  
  render() { 
    return ( 
                        <div className='drrag'>
                          {/* <div>
                            {this.props.cards1[0]}
                          </div> */}
                          <DragDropContext onDragEnd={this.props.handledDragEnd}>

                            <div className="column">
                            <Droppable droppableId={"Card1"}>
                              {(provided) => {
                              return(
                                <div 
                                ref={provided.innerRef}
                                {...provided.droppableProps}

                                className={"left-column"}
                                
                                >

                                <h5 className="column-name">Card1</h5>
                         
                                {
                              
                                  this.props.cards1.slice(0,this.props.visible1).map((card, id) => {
                                      return(

                                        <Draggable key ={id} index={id} draggableId={(card.id)}>
                                            {(provided)=> {
                                            return(
                                              <div 
                                              ref={provided.innerRef}
                                              {...provided.draggableProps}
                                              {...provided.dragHandleProps}
                                              className = "draggable-col"
                                              >

                                                
                                              <Card cardName={card.cardName} cardId={card.id}  cardIndex={id} key={card.id}   />
                                              
                                            
                                              </div>

                                              )
                                              }}
                                        </Draggable>
                                              )

                                          })
                                }

                                {this.props.visible1 < this.props.cards1.length &&
                                  <button onClick={this.props.loadMore1} type="button" className="load-more">Load more</button>
                                }

                                {this.props.cards1.length > 0 && 
                                <button onClick={this.props.loadLess1} type="button" className="load-less">Load less</button>
                                }

                                {provided.placeholder}


                                </div>

                                )}

                              }

                          </Droppable>



                          <Droppable droppableId={"Card2"}>
                            {(provided) => {
                              return(
                                <div 
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className={"right-column"}
                                
                                >

                                <h5 className="column-name">Card2</h5>

                                {
                                this.props.cards2.slice(0,this.props.visible2).map((card2 , id) => {
                                return(
                                    <Draggable key ={id} index={id} draggableId={(card2.id)}>
                                    {(provided)=> {
                                      return(
                                        <div 
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className = "draggable-col2"
                                        >

                                        <Card cardName={card2.cardName} cardId={card2.id} cardIndex={id}  key={card2.id}   />
                                        

                               
                                        </div>

                                      )
                                      }}
                                      </Draggable>
                                  )

                                })
                                }


                                {this.props.visible2 < this.props.cards2.length &&
                                  <button onClick={this.props.loadMore2} type="button" className="load-more2">Load More</button>
                                }

                                { this.props.cards2.length > 0&&
                                  <button onClick={this.props.loadLess2} type="button" className="load-less2">Load Less</button>
                                }

                                {provided.placeholder}

                                </div>

                                )}

                                }

                          </Droppable>
                          
                            
                          </div>
                          </DragDropContext>
                          </div>


     );
  }
}
 
export default Dragg;


