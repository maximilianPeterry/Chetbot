import React, {Component} from 'react';
// import './App.css';
import MainBtn from './btn/btn';
import Dragula from 'react-dragula';

class App extends Component {
 state = {
   clicked: false
 }

clickHandler = () => {
//the variable clicker is now being given state
//the state of clicked will not be 
  let clicker = this.state.clicked;
  this.setState({clicked: !clicker})
}

  render() {
  return (
 
    <div className="App" ref={this.dragulaDecorator}>
      {/* <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div> */}
      <MainBtn clicked={this.clickHandler} show ={this.state.clicked}/>

    </div>
  );
}
dragulaDecorator = (componentBackingInstance) => {
  if (componentBackingInstance){
    let options = { };
    Dragula([componentBackingInstance], options);
  }
}
}


export default App;
