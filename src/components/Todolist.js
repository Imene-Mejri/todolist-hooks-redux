import React ,{ useEffect } from 'react';
import Todo from './todo';
import { useSelector ,useDispatch} from 'react-redux';
import { FilterHandler } from '../Redux/action';
import { FILTER } from '../Redux/action-types';

export default function Todolist() {
   
    const dispatch=useDispatch()
    const todos =useSelector(state=>state.todos)
    const filteredTodos=useSelector(state=>state.filteredTodos) 
    const filter=useSelector(state=>state.FILTER)

    useEffect(()=>{
        dispatch(FilterHandler())
  },[FILTER,todos])

    return (
        <div>
            {
               filteredTodos.map((el)=>(
                    <Todo tasks={el} key={el.id}/>
                ))}
            
       
        </div>
    )
}
