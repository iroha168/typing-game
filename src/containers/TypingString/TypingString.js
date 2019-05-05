import React, { Component } from 'react';
import TypingChar from '../../components/TypingChar/TypingChar';
import { connect } from 'react-redux';


class TypingString extends Component {
        isOpaque = (index) =>{
                if(index < this.props.currentPos) return false;
                else return true;
        }

        render (){
                return [].map.call(this.props.str, (char, index) => (
                        <TypingChar char={char} index={index} key={index} 
                        isOpaque={this.isOpaque(index)}/>)
                )
        }
}

const mapStateToProps = state => {
    return { 
            currentPos: state.typing.currentPos 
        }
}

export default connect(mapStateToProps)(TypingString);