import React, {Component } from 'react';
import {render } from 'react-dom';

// Stateless Functional Component 

const ChildHeader =(props ) =>{
  // we can also write above code as -
  // const ChildHeader =({totalCount })=>...
  // and remove props. from below 
    return(
    <React.Fragment>
        <h5 className ="font-italic ">
            Total child components : {props.totalCount }
        </h5>
    </React.Fragment>
    );
  }

export default ChildHeader ;

