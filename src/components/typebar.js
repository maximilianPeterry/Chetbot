import React from 'react';

class TypeBar extends React.Component {
    render() {
        return (
            <div id='messageBox'>
                <form onSubmit=''>
                    <input value=''
                        onInput=''
                        id='textInput'
                        type='text'
                        autoFocus
                        placeholder='Type a message...'
                    />
                </form>
            </div>
        ) //end return
    } //end render
} // end class

export default TypeBar;