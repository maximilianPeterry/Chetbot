import React, {Component} from 'react';
import Pusher from 'pusher-js'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userMessage: '',
      conversation: [],
    }
  }//end constructor

  componentDidMount() {
    const pusher=new Pusher ('442b1855142d56793691', {
      cluster: 'eu',
      // encrypted:true,
      forceTLS:true,
    }) 

    const channel = pusher.subscribe('bot')
    channel.bind('bot-response', data => {
      const msg = {
        text: data.message,
        user: 'ai',
      }
      this.setState({
        conversation: [...this.state.conversation, msg],
      })
    })
  }//end componentDidMount

  handleChange = event => {
    this.setState({userMessage: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    if (!this.state.userMessage.trim()) return

    const msg = {
      text: this.state.userMessage,
      user: 'human',
    }

    this.setState ({
      conversation: [...this.state.conversation, msg],
    })

    fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify ({
        message: this.state.userMessage,
      }),
    });

    this.setState({userMessage: ''});

  };//end handleSubmit

  render() {
    const ChatBubble = (text, i, className) => {
      return (
        <div key={`${className}-${i}`} className={`${className} chat-bubble`}>
          <span className="chat-content">{text}</span>
        </div>
      ) //end return
    }//end ChatBubble

    const chat=this.state.conversation.map((e, index) => 
      ChatBubble(e.text, index, e.user)
    );

    return (
      <div>

        <h1>React ChatBot</h1>
        <div className="chat-window">
          <div className="conversation-view">{chat}</div>
          <div className="message-box">
            <form onSubmit={this.handleSubmit}>
              <input
                  value={this.state.userMessage}
                  onInput={this.handleChange}
                  className="text-input"
                  type="text"
                  autoFocus
                  placeholder="Type your message and hit Enter to send"
              />
            </form>
          </div>
        </div>
      </div>
    )//end return
  }//end render
}//end class App

export default App