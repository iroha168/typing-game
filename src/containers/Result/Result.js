import React, { Component } from 'react';
import Button from '../../util/UI/Button/Button'

class Result extends Component {
    render() {
        return (
        <div> 
            <div>YOUR RESULT IS SHOWN HERE!</div>
            <Button href="/">戻る</Button>
        </div>
        );
    }
}

export default Result;