import React from 'react';
import Todo from './todo';
import { useSelector } from 'react-redux';

export default function Todolist() {
    const todos =useSelector(state=>state.todos)
    
    return (
        <div>
            {
                todos.map((tasks)=>(
                    <Todo tasks={tasks}/>
                ))}
            
       
        </div>
    )
}
