import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player';
import Child from './childComponent';

class App extends Component {
  state={
    count:0,
    array: ['Data 1', 'Data 2', 'Data 3'],
    imageUrl:"https://picsum.photos/200",
    videoUrl: "https://www.youtu.be/BWf-eARnf6U",
    childArray : [
        {id:1,value: 'First'},
         {id : 2, value : 'Second'}
    ]
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

renderArray(){
  if (this.state.array.length===0)
      {return "There is no data present";}
  
  return <div >
  <ul> 
    {this. state. array. map(data => <li key={data}>{data}</li>  )}
  </ul>
  </div >;
}

handleDelete =(childId ) =>{
  console.log ('clicked ', childId );
  const updatedChildArray = this. state. childArray.filter(c=> c.id != childId);

  this.setState({childArray :updatedChildArray });
}
  render() {
    return (
      <div>
        <h1>React Tutorial Hands - on</h1>
<div> 
    <h3 className="header mt-5">
    Dynamic state updation, dynamic style updation, event handler & binding demo
    </h3>

    The current state counter value is 
    <span 
    className={this.dynamicStyling()}>
    {this. formatCount()}
    </span >
    <br></br>
    <button className ="btn btn-secondary mt-3 "
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
    Rendering lists in React using map & conditional rendering demo
    </h3>
    <div>
        {this. renderArray()}
    </div>
</div>

<div>
    <h3 className ="header mt-3">
    Rendering image in react
    </h3>
    <br></br>
    This code displays a random image everytime.
    <img src={this. state. imageUrl} alt=""/>
</div>

<div>
    <h3 className ="header mt-3 ">
        Embedding videos in React 
    </h3>
    <ReactPlayer
    className ="mt-3"
     url={this. state. videoUrl} playing />
</div>

<div>
    <h3 className ="header mt-5">
       Rendering Child Component, using props and children attributes , passing data and event handling from child to parent
    </h3>
    {this.state.childArray.map (
      child => <Child key ={child.id}
      value = {child.value}
      id= {child.id}
      onDelete ={this.handleDelete}>
          <h2> Title for child# {child.id}
          </h2>
      </Child>
    )}
</div>


      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
