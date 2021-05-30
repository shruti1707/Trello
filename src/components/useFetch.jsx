import {useEffect , useState} from 'react';
import {API , graphqlOperation} from 'aws-amplify';
import { listTasks } from '../graphql/queries';




const useFetch = () => {


    // const [task , setTask] = useState({
    //     "todo" : {
    //         title : "TO-DO",
    //         items : []
    //     },
    //     "in-progress" : {
    //         title : "IN-PROGRESS",
    //         items : []
    //     },
    //     "completed" : {
    //         title : "COMPLETED",
    //         items : []
    //     }

    // });

    const [task , setTask] = useState(null);

    const [isPending , setISPending] = useState(true);
    const [error , setError] = useState(null);

    useEffect( () => {
        fetchtasks();

    } , []);

    const fetchtasks = async () => {
        try{
            const tdata = await API.graphql(graphqlOperation(listTasks));
            const tlist = (tdata.data.listTasks.items);
            
            console.log(tlist);
            setTask(tlist);
            setISPending(false);
            setError(null);
        } catch(error){
            console.log(error);
            setError(error);
            setISPending(false);
        }

    };

   


    


    return {task, isPending , error} 

    

    




   
}
 
export default useFetch;