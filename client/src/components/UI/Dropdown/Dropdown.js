import React from 'react'
import classes from './Dropdown.css';

export default (props) => {
    let options = props.options.map((option) => {
        return <option key={option} value={option}>{props.lookup[option][props.display]}</option> 
    })
    
    return (
        <select className={classes.Dropdown} onChange={props.change}>
            <option key='blank' value='blank'>{props.unassigned}</option>
            {options}
        </select>
    )
}
