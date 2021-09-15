

import {DELETE,DONE,ADD,EDIT} from './action-types'





const initiatestate ={
  todos:[
      {text:'call me' ,id:1 , isDONE:false},
      {text:'call me back' ,id:2 , isDONE:false}
  ]  
}


export const todosreducer =(state=initiatestate,action)=>{
    switch (action.type){
        case DELETE:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.payload),
      };

          case DONE:
      return {
        ...state,
        todos:state.todos.map((el) =>
          el.id == action.payload ? { ...el, isDONE: !el.isDONE } : el
        ),
      };
      case ADD:
          return {
              ...state,todos:[...state.todos,action.payload],
          }
          case EDIT :
            return {
                ...state,
                todos : state.todos.map(el=> el.id == action.payload.ID? {...el, text:action.payload.textinput}:el )
            }

            default:return state;
    }

}

