import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from 'axios';
import * as todoActions from 'actions/todo';

class Demo extends Component {

  constructor(props) {
	super(props);
    this.props.getAllTodos();
  }
  provide_time() {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
  }

  get(){
	return this.props.getAllTodos();
  }
  pst(){
	return this.props.addTodo("New task"); 
  }
  del(){

	return this.props.removeTodoById(2);
  }
  put(){
	return this.props.putTodo();
  }
  
  showTodos() {
    const todoCount = this.props.todo.todos.length;
    const todos = this.props.todo.todos;
    if (todoCount > 0) {
      return todos.map(todo => {
        console.log(todo.title);
        return <p key={todo.id}>{todo.title}</p>;
      });
    }
    else {
      return (
        <p>Sorry no todos :(</p>
      );
    }
   }
  
  render() {
    const time = this.provide_time();
    return (
      <div>
        <h1>Hello World!</h1>
        <h3>{time}</h3>
        <button onClick={() => this.get()}>GET /api/v1/get</button>
		<button onClick={() => this.pst()}>POST /api/v1/add</button>
		<button onClick={() => this.del()}>DELETE /api/v1/remove</button>
		<button onClick={() => this.put()}>PUT /api/v1/done</button>
		{this.showTodos()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todo: state.todo,
  }
}

export default connect(mapStateToProps, {...todoActions})(Demo);
