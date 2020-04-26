import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  state={
    count:0
  };

formatCount(){
  return this. state. count ===0? " Zero" :
this. state. count ;
}

dynamicStyling(){
  let classes ="badge badge-";
  classes+=this. state. count===0? "warning" : "primary";
  return classes ;
  }

  render() {
    return (
      <div>
        <h1>React Fundamentals</h1>
<div> 
    <h3 className="header">
    Dynamic state change 
    </h3>

    The current state counter value is 
    <span 
    className={this.dynamicStyling()}>
    {this. formatCount()}
    </span >
    <br></br>
    <button className ="btn btn-secondary"
    onClick=""> 
    Increment
    </button>
</div>




      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
