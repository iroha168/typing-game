import classes from './Button.css';
import React from 'react';
const button = props => <a href={props.href} className={classes.CpBtn}>{props.children}</a>

export default button;