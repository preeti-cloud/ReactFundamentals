import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <h1>React Fundamentals</h1>
<div> 
    <h3 className="header">
    Dunamic state change 
    </h3>
</div>




        <p>
          Start editing to see some magi
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
