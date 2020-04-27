import React, {Component } from 'react';
import {render } from 'react-dom';

class ChildHeader extends Component {

  render(){
    return(
    <React.Fragment>
        <h5 className ="font-italic ">
            Total child components : {this.props.totalCount }
        </h5>
    </React.Fragment>
    );
  }
}

export default ChildHeader ;

