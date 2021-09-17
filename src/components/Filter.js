import { useDispatch } from "react-redux";
import { Filtering } from "../Redux/action";



export default function Filter() {
    

    const dispatch = useDispatch()

    const statusHandler=(e)=>{
        dispatch (Filtering(e.target.value))}

    

    

    return (
        <div className='filter'>
            <label for="cars">Choose a your options:</label>

           <select  onChange={statusHandler} name="cars" id="cars">
               <option value="ALL">ALL</option>
               <option value="completed">completed</option>
               <option value="incompleted">incompleted</option>
         
           </select>
            
        </div>
    )
}
