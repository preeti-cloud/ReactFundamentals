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

incrementCount = () =>{
  this. setState ({count :
  this. state. count + 1
  });
}

decrementCount=()=>{
  this. setState ({
count : this.state. count -1
  });
}
  render() {
    return (
      <div>
        <h1>React Fundamentals</h1>
<div> 
    <h3 className="header">
    Dynamic state updation, dynamic style updation, event handler & binding demo
    </h3>

    The current state counter value is 
    <span 
    className={this.dynamicStyling()}>
    {this. formatCount()}
    </span >
    <br></br>
    <button className ="btn btn-secondary"
    onClick={this. incrementCount}> 
    Increment
    </button>

    <br></br>
    <button
    onClick={this. decrementCount}
     className="btn btn-secondary mt-3">
    Decrement 
    </button>
</div>

<div>
    <h3 className="header mt-3">
    Rendering lists in React using map
    </h3>

    <ul>
        <li>
            {}
        </li>
    </ul>
</div>




      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
