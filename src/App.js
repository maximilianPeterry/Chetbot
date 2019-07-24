import React, { Component } from 'react';
import Pusher from 'pusher-js'
import './App.css';
import Header from './components/chatheader'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMessage: '',
      conversation: [],
    }
  }//end constructor

  componentDidMount() {
    const pusher = new Pusher('442b1855142d56793691', {
      cluster: 'eu',
      // encrypted:true,
      forceTLS: true,
    })


//     const channel = pusher.subscribe('bot')
//     channel.bind('bot-response', data => {
//       const msg = {
//         text: data.message,
//         user: 'ai',
//       }
//       this.setState({
//         conversation: [...this.state.conversation, msg],
//       })
//     })
//   }//end componentDidMount


  handleChange = event => {
    this.setState({ userMessage: event.target.value })
  }


//   handleSubmit = event => {
//     event.preventDefault()
//     if (!this.state.userMessage.trim()) return

//     const msg = {
//       text: this.state.userMessage,
//       user: 'human',
//     }


    this.setState({
      conversation: [...this.state.conversation, msg],
    })

    fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: this.state.userMessage,
      }),
    });

    this.setState({ userMessage: '' });


//   };//end handleSubmit

  render() {
    const FloatButton = () => {
        return (
          
          <Container>
            <Link href="#"
              tooltip="Create note link"
              icon="far fa-sticky-note"/>
            <Button
              tooltip="Big Button"
              icon="fas fa-plus"
              rotate={true}
              onclick={() => console.log('FAB ')}/>
              <p>FloatButton</p>
          </Container>
        )//end return
    }



    return (
      <div>
        <h1>React ChatBot</h1>
        <FloatButton />

      </div>
    )//end return
  }//end render


export default App
