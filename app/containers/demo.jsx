import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from 'axios';
import * as todoActions from 'actions/todo';

class Demo extends Component {

  constructor(props) {
	super(props);
    this.props.getAllTodos();
	
	this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  provide_time() {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
  }

  get(){
	return this.props.getAllTodos();
  }
  pst(title){
	return this.props.addTodo(title); 
  }
  del(id){

	return this.props.removeTodoById(id);
  }
  put(id){
	return this.props.putTodo(id, true);
  }
  
  showTodos() {
    const todoCount = this.props.todo.todos.length;
    const todos = this.props.todo.todos;
    if (todoCount > 0) {
      return todos.map(todo => {
        return <p key={todo.id}>
		Id: {todo.id},&nbsp; Title: "{todo.title}",&nbsp; Done: {todo.done.toString()}&nbsp; 
		<button onClick={() => this.put(todo.id)}>Mark as done</button> &nbsp;
		<button onClick={() => this.del(todo.id)}>Delete</button>
		</p>;
      });
    }
    else {
      return (
        <p>No tasks</p>
      );
    }
   }
  
    handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		this.pst(this.state.value);
		event.preventDefault();
	}
  
  render() {
    const time = this.provide_time();
    return (
      <div>
        <h1>Hello World!</h1>
        <h3>{time}</h3>
		<form onSubmit={this.handleSubmit}>
			<label>
				<input type="text" value={this.state.value} onChange={this.handleChange} />
			</label>
			<input type="submit" value="Add task" />
		</form>
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
