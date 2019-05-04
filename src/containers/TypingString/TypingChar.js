import React, { Component } from 'react';
import classes from './TypingChar.css';

class TypingChar extends Component {
    render = () => {
        const cl = (this.props.isOpaque) ? classes.Unaffected : classes.Typed
        return <span className = {cl} onKeyDown={this.keydownHandler}>{this.props.char}</span>
    }
}

export default TypingChar;