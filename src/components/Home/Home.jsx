import useFetch from '../useFetch';
import Card from '../Card/Card';
// import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Dragg from '../Drag/Draggable';



const Home = () => {

    const { task , isPending , error } = useFetch();

   

    return ( 
        <div className="home">

            
            
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {task && <Dragg cards = {task}/>}

            {/* {task && < Card cards = {task} title = "Card1" />}
            {task && < Card cards = {task} title = "Card2" />} */}

        </div>
     );
}
 
export default Home;