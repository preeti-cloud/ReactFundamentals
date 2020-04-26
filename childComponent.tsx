import React, {Component} from 'react';
import {render} from 'react-dom';

class Child extends Component {

  render(){
    return(
      <p className ="header">
         I'm a child component.
      </p>
    )
  }
}

export default Child;