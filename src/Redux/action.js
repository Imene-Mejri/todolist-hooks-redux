import {DELETE,DONE,ADD,EDIT} from './action-types'



     
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