import React, {Component} from 'react';
import {render} from 'react-dom';

class Child extends Component {

  render(){
    return(
      <p className ="header">
         I'm a child component with rank - 
         {this. props. value} .
      </p>
    )
  }
}

export default Child;