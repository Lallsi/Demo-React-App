import React, { Component } from 'react';
import moment from 'moment';

export default class Demo extends Component {

  provide_time() {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
  }

  get(){
	var request = new XMLHttpRequest();
	request.open("GET", "http://localhost:8000/api/v1/get", false);
	request.send(null);
	return;
  }
  pst(){
	var request = new XMLHttpRequest();
	request.open("POST", "http://localhost:8000/api/v1/add", false);
	request.send(null);
	return;
  }
  del(){
	var request = new XMLHttpRequest();
	request.open("DELETE", "http://localhost:8000/api/v1/remove", false);
	request.send(null);
	return;
  }
  put(){
	var request = new XMLHttpRequest();
	request.open("PUT", "http://localhost:8000/api/v1/done", false);
	request.send(null);
	return;
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
      </div>
    );
  }
}
