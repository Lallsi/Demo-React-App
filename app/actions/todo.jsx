import { ADD_TODO, REQUEST_TODOS, RECEIVE_TODOS, REQUEST_ERROR, REMOVE_TODO } from './types';
import axios from 'axios';


export function addTodoF(todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

export function addTodo(title) {
 
  return function(dispatch) {
    dispatch(requestTodo());
    return axios.post('http://localhost:8000/api/v1/add', { title: title } )
      .then(function (response) {
        console.log(response.data);
        return dispatch(addTodoF(response.data));
      })
      .catch(function (error) {
        console.log(error);
        return dispatch(requestError());
      });
  }
}

export function requestTodo() {
  return {
    type: REQUEST_TODOS,
  }
}

export function receiveTodos(todos) {
  return {
    type: RECEIVE_TODOS,
    todos,
  }
}

export function requestError() {
  return {
    type: REQUEST_ERROR,
  }
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
	id
  }
}

export function removeTodoById(id){
  return function(dispatch) {
    dispatch(requestTodo());
    return axios.delete('http://localhost:8000/api/v1/remove',{id:id})
      .then(function (response) {
        console.log(response.data);
		if(response.data.removed) return dispatch(receiveTodos(response.data.todos));
		else dispatch(requestError());
        
      })
      .catch(function (error) {
        console.log(error);
        return dispatch(requestError());
      });
  }
}

export function putTodo() {
  return function(dispatch) {
    dispatch(requestTodo());
    return axios.put('http://localhost:8000/api/v1/done')
      .then(function (response) {
        console.log(response.data.todos);
        return dispatch(receiveTodos(response.data.todos));
      })
      .catch(function (error) {
        console.log(error);
        return dispatch(requestError());
      });
  }
}

export function getAllTodos() {
  return function(dispatch) {
    dispatch(requestTodo());
    return axios.get('http://localhost:8000/api/v1/get')
      .then(function (response) {
        console.log(response.data.todos);
        return dispatch(receiveTodos(response.data.todos));
      })
      .catch(function (error) {
        console.log(error);
        return dispatch(requestError());
      });
  }
}