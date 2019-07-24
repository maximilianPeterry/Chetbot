import React from 'react';
import BackIcon from './Path 6.svg'
import './chatheader.css'

class Header extends React.Component {
    render() {
        return (
            <div id='navCont'>
                <img id='backicon' src={BackIcon} alt="" />
                <nav id='nav'>
                    <h1 id='chattingWith'>ChetBot</h1>
                </nav>
            </div >
        ) //end return
    } //end render
} // end class

export default Header;