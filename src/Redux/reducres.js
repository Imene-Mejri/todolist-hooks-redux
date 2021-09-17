

import {DELETE,DONE,ADD,EDIT,FILTER,FilteredTodos} from './action-types'





const initiatestate ={
  todos:[
      {text:'call me' ,id:1 , isDONE:false},
      {text:'call me back' ,id:2 , isDONE:false}
  ] ,
  filter : 'All',
  filteredTodos : [] 
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
            case FILTER :
                return {
                    ...state,
                    filter:action.payload.status
                }
                case FilteredTodos :
                  return {
                      ...state,
                      filteredTodos:  state.filter==="Completed"? state.todos.filter(el=>el. isDONE==true):
                                      state.filter==="Uncompleted"? state.todos.filter(el=>el. isDONE==false):
                                      state.filter==="All"? state.todos:
                                      null
                  }

            default:return state;
    }

}

