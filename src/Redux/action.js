import {DELETE,DONE,ADD,EDIT,Filter, Filtering} from './action-types'



     
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


export const inputfilter =(cas)=>{
    return {
        type: Filter,
        payload:{cas}

    }
}

export const FilterHandler =()=>{
    return {
        type: Filtering
           
    }
}
