import React from 'react'
import classes from './Button.css';

export default (props) => {
    return (
        <button className={classes.Button} onClick={props.clicked}>{props.text||props.children}</button>
    )
}
