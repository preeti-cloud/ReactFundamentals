import React, {Component} from 'react';
import {render} from 'react-dom';
import ChildHeader from './childHeader';

class Child extends Component {

  render(){

    // Argument destructuring demo below
    const {array, children ,value , onDelete ,id } =this.props;
    return (
      <div  className ="lead">

      <ChildHeader totalCount = {array.length }/>
      <span  className ="font-bold ">
          {children}
       </ span>
         I'm child component with rank - 
         {value} .

         <button className ="btn-danger btn btn-sm ml-2 " 
         onClick= {() =>onDelete(id)}>
         Delete
         </button>
      </div>
    )
  }
}

export default Child;