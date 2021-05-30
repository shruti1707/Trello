
import { useState } from 'react';
import { DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'; 
import Card from '../Card/Card';
import './Draggable.css'

const Dragg = ({cards}) => {

 


  return ( 

    <div className='drrag'>
                          
        <DragDropContext onDragEnd = { e => console.log(e)}>

        <div className="column">
        <Droppable droppableId={"Card1"}>
          {(provided) => {
          return(
            <div 
            ref={provided.innerRef}
            {...provided.droppableProps}

            className={"columns"}
            >
            <h5 className="column-name">To-do</h5>
            {
          
              cards.map((card , id) => {
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
                                <Card cards = {cards} />
                                </div>
                              )
                              }}
                          </Draggable>
                        )

                      })
            }

            {/* {this.props.visible1 < this.props.cards1.length &&
              <button onClick={this.props.loadMore1} type="button" className="load-more">Load more</button>
            }

            {this.props.cards1.length > 0 && 
            <button onClick={this.props.loadLess1} type="button" className="load-less">Load less</button>
            }

            {provided.placeholder} */}


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
              className={"columns"}
              
              >

              <h5 className="column-name">In-progress</h5>

              {
              cards.map((card2 , id) => {
              return(
                  <Draggable key ={id} index={id} draggableId={(card2.id)}>
                  {(provided)=> {
                    return(
                      <div 
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className = "draggable-col"
                      >

                      <Card cards = {cards}/>
                      

              
                      </div>

                    )
                    }}
                    </Draggable>
                )

              })
              }


              {/* {this.props.visible2 < this.props.cards2.length &&
                <button onClick={this.props.loadMore2} type="button" className="load-more2">Load More</button>
              }

              { this.props.cards2.length > 0&&
                <button onClick={this.props.loadLess2} type="button" className="load-less2">Load Less</button>
              }

              {provided.placeholder} */}

              </div>

              )}

              }

        </Droppable>

        <Droppable droppableId={"Card3"}>
          {(provided) => {
            return(
              <div 
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={"columns"}
              
              >

              <h5 className="column-name">Completed</h5>

              {
              cards.map((card2 , id) => {
              return(
                  <Draggable key ={id} index={id} draggableId={(card2.id)}>
                  {(provided)=> {
                    return(
                      <div 
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className = "draggable-col"
                      >

                      <Card cards = {cards}/>
                      

              
                      </div>

                    )
                    }}
                    </Draggable>
                )

              })
              }


              {/* {this.props.visible2 < this.props.cards2.length &&
                <button onClick={this.props.loadMore2} type="button" className="load-more2">Load More</button>
              }

              { this.props.cards2.length > 0&&
                <button onClick={this.props.loadLess2} type="button" className="load-less2">Load Less</button>
              }

              {provided.placeholder} */}

              </div>

              )}

              }

        </Droppable>
        
          
        </div>
        </DragDropContext>
        </div>


   );
}
 
export default Dragg;




