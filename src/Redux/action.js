import {DELETE,DONE,ADD,EDIT,FILTER, FilteredTodos} from './action-types'



     
export const  deletehandler=(ID)=>{
return{
    type:DELETE,
    payload:ID

}
}

export const donehandler =(ID)=>{
    return{
        type:DONE,
        payload:ID
    }
}
export const addhandler=(nwetodo)=>{
    return{
        type:ADD,
        payload:nwetodo
    }
}
export const Edithandler =(ID,textinput)=>{
    return{
    type:EDIT,
    payload:{ID,textinput}
    }
}
export const Filtering =(status)=>{
    return {
        type:FILTER,
        payload:{status}

    }
}

export const FilterHandler =()=>{
          return {
              type: FilteredTodos
           
          }
      }