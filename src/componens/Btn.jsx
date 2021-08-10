import React, { Component } from 'react';


export default class Btn extends Component {
    state = {
    input1: [],
    input2: '',
    inputCheck : true,
  }
  btn1H = e => {
   
     this.setState({input1: e.target.value})

  }

  btn2H = e => {
    this.setState({input2: e.target.value})
  }

  btn3H = e => {
    this.setState({inputCheck: e.target.checked})
  }
  render() {
    const {input1, input2, inputCheck} = this.state;
	return (
      <div>
          <input type="text" value={input1} onChange={this.btn1H}/>
          <input type="phone" value={input2} onChange={this.btn2H}/>
          <input type="checkbox" checked={inputCheck}  onChange={this.btn3H}/>
	    </div>
    )
  }
} 