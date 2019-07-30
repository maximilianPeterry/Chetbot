import React from 'react';
import Header from './chatheader';
import Pusher from 'pusher-js'
import './chatApp.css';

class ChatApp extends React.Component {

  state = {
    userMessage: '',
    conversation: [],
  }

  autoScroll = () => {
    this.messageEnd.scrollIntoView(false, { behaviour: 'smooth' })
  }

  componentDidUpdate() {
    this.autoScroll()
  }

  componentDidMount() {
    const pusher = new Pusher('442b1855142d56793691', {
      cluster: 'eu',
      // encrypted:true,
      forceTLS: true,
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
    this.autoScroll()
  }//end componentDidMount

  handleChange = event => {
    this.setState({ userMessage: event.target.value })
  }//end handleChange

  handleSubmit = event => {
    event.preventDefault()
    if (!this.state.userMessage.trim()) return

    const msg = {
      text: this.state.userMessage,
      user: 'human',
    }

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

  };//end handleSubmit

  render() {
    const ChatBubble = (text, i, className) => {
      return (
        <div key={`${className}-${i}`} className={`${className} chat-bubble`}>
          <span className="chat-content">{text}</span>
        </div>
      ) //end return
    }//end ChatBubble

    const chat = this.state.conversation.map((e, index) =>
      ChatBubble(e.text, index, e.user)
    );

    return (
      <div className='chatContainer'>
        <div><Header clicked={this.props.clicked} /></div>
        <div className='conversation-view'>{chat}</div>
        <div ref={(el) => { this.messageEnd = el }}>messageEnd</div>
        <div className='message-box'>
          <form id='form' onSubmit={this.handleSubmit}>
            <input
              value={this.state.userMessage}
              onInput={this.handleChange}
              className='text-input'
              type='text'
              autoFocus
              placeholder='Type a message...'
            />
          </form>
        </div>
      </div>
    ) // end return
  } // end render
} // end class

export default ChatApp;