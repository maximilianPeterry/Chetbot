import React from 'react';
import './App.css';
import chatme from './components/chatIcon.svg'
import hamburger from './components/hamburger.svg'
import bg from './components/bg.png'
import ChatApp from './components/chatApp'

class BasePage extends React.Component {
  state = {
    clicked: false
  }

clickIt = () => {
  let myState = this.state.clicked;
   this.setState({clicked: !myState})
  }

  render() {

    return (
      <div id='container'>
        <nav id='navBar'>
          <img id='hamburger' src={hamburger} alt='' />
        </nav>
        <div id='landingPage'>
          <img id='bg' src={bg} alt='' />
        </div>
        <img id='benjamin' src={chatme} onClick={() => this.clickIt()} alt='HITS ALT' />
        {this.state.clicked ? <ChatApp clicked={this.clickIt}/> : <p></p>}
      </div>
    )
  }
}

export  default BasePage 

