import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Typing from '../../containers/Typing/Typing';
import Result from '../../containers/Result/Result'

const content = () => {
    return <Switch> 
        <Route path="/" exact component={Home} />
        <Route path="/typing" exact component={Typing} />
        <Route path="/result" exact component={Result} />
        <Route path="/" render={props=>{return <div>Hello</div>}}/>
    </Switch>
}

export default content;