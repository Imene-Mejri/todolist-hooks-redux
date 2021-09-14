
import { useDispatch } from 'react-redux'
import {deletehandler,donehandler } from '../Redux/action'


export default function Todo({ tasks }) {
    
    const dispatch = useDispatch()

  
    
    return (
        <div className='todo'>
             {  <h5    className={tasks.isDONE && 'done' }  > {tasks.text} </h5>}

            <div >
            <button onClick={()=>dispatch(deletehandler(tasks.id))}>delete</button>

                <button  onClick={()=>dispatch(donehandler(tasks.id))}  className='btn-icon'>done</button>
            </div>
        </div>
    )
}
