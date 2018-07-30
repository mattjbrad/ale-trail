import React from 'react'
import classes from './Button.css';

export default (props) => {
    let subtext;
    if (props.subtext){
        subtext = (
            <div>
                {props.subtext}
            </div>
        );
    }
    return (
        <button className={classes.Button} onClick={props.clicked}>
            <div>
                {props.children}
            </div>
            {subtext}
        </button>
    )
}
