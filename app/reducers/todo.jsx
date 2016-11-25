import { ADD_TODO, REQUEST_TODOS, RECEIVE_TODOS, REQUEST_ERROR, REMOVE_TODO } from 'actions/types';

const initState = {
  loading: false,
  todos: [],
}

export function todoReducer(state = initState , action){
  switch (action.type) {
	case ADD_TODO:
      return {
	    ...state,
	    loading: false,
        todos: [
          ...state.todos,
          {
            id: action.todo.id,
            title: action.todo.title,
			done: action.todo.done,
          },
        ]
      }   
    case REQUEST_TODOS:
      return {
        ...state,
        loading: true,
      }
    case RECEIVE_TODOS:
      return {
        ...state,
        loading: false,
        todos: action.todos,
      }
    case REMOVE_TODO:
      return {
	    ...state,
	    loading: false,
        todos: [
          ...state.todos.filter(
		    function(elem){
				return elem.id != action.id;
			})
        ]
      } 
    case REQUEST_ERROR:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}