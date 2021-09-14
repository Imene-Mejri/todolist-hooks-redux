import React from 'react'
import { addhandler } from '../Redux/action'
import {useDispatch} from 'react-redux';
import {useState} from 'react'


export default function Addtodo() {
   const dispatch = useDispatch()
  
   const [input,setinput]=useState('')

   const newTask = () => {
    dispatch(
        addhandler({
            id : Math.random(), 
            text : input,
            isDONE : false,
         
        })
    )
  
}
    return (
        <div className='addtodo'>
        
            <input value={input} onChange={(e)=>setinput(e.target.value)} type='text' placeholder='write here your items' />
          
            <button onClick={newTask} type='button' >Add</button>
          
        </div>
    )
}
