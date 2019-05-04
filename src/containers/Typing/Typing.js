import React, {Component}from 'react';
import EventListener from 'react-event-listener';
import { connect } from 'react-redux';
import TypingString from '../TypingString/TypingString';
import * as actions from '../../actions/index';

class Typing extends Component {
    componentDidMount() {
        this.props.initStr("random string here!!");
    }

    isCorrect = (inputChar) => {
        return inputChar == this.props.str.charAt(this.props.currentPos).toUpperCase()
    }

    onKeyDown = ( event ) => {
        const inputChar = String.fromCharCode(event.keyCode)
        if(this.isCorrect(inputChar))
            this.props.correctType();
        else
            this.props.wrongType();
        console.log(inputChar)
    }

    render(){
        return (
        <div>
            <EventListener onKeyDown={event => this.onKeyDown(event)} target="window" />
            <TypingString str={this.props.str}/>
        </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        str: state.typing.str,
        currentPos: state.typing.currentPos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initStr: (str) => dispatch(actions.initStr(str)),
        correctType: (keyCode) => dispatch(actions.correctType(keyCode)),
        wrongType: (keyCode) => dispatch(actions.wrongType(keyCode))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Typing);