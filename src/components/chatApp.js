import React from 'react';
import Header from './chatheader';
import TypeBar from './typebar'

class ChatApp extends React.Component {
    render() {
        return (
            <div id='container'>
                <Header />
                <div id='conversationView'></div>
                <TypeBar />
            </div>
        ) // end return
    } // end render
} // end class

export default ChatApp;