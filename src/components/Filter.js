


import { useDispatch } from "react-redux";
import { inputfilter } from "../Redux/action";

import React from 'react'

export default function Filter() {
    const dispatch=useDispatch()

    const casHandler=(e)=>{
        dispatch ( inputfilter(e.target.value))}
    return (
        <div>
            <select onChange={casHandler} className="select">
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select>  
            
        </div>
    )
}






   