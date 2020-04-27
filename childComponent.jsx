import React, {Component} from 'react';
import {render} from 'react-dom';

class Child extends Component {

  render(){
    return(
      <div  className ="lead">
      <span  className ="font-bold ">
          {this. props. children}
       </ span>
         I'm child component with rank - 
         {this. props. value} .

         <button className ="btn-danger btn btn-sm ml-2 " 
         onClick= {() =>this.props.onDelete(this.props.id)}>
         Delete
         </button>
      </div>
    )
  }
}

export default Child;