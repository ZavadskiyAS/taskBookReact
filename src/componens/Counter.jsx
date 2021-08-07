import React, { Component } from 'react';


export default class Counter extends Component {
 const {increment, setIncrement} = setState(0);
render() {
  console.log(this.props);
  let count = 0
	return (
      <div>
        <span>{count}</span>
        Counter
        <button type="button" onClick={()=>{
          count + 1
        }}>Increment</button>

	    </div>
    )
  }
} 