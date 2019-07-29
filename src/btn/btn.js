import React from 'react';
import './btn.css';
import ChatApp from '../components/chatApp';

// const dragula = require('react-dragula');

const MainBtn = (props) => {
    // {(dragula)[document.getElementById(left), document.getElementById(right)]}
     return (
        
            <div className="chat">
                <div className="circle" onClick = {props.clicked}>
                </div>
                <div className="textLevel" onClick = {props.clicked}>
                </div>
                <div >

                {props.show ? <ChatApp id="chatBox" /> : null}
                
                </div>
            </div>
    )
}
export default MainBtn