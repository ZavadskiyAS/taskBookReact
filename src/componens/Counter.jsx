import React, { Component } from 'react';


export default class Counter extends Component {
    state = {
    tasks: [],
    number:'',
  }
  render() {
	return (
      <div>
        {this.state.tasks} / {this.state.number}
	    </div>
    )
  }
} 