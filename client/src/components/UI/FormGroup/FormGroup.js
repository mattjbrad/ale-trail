import React from 'react'
import classes from './FormGroup.css';

export default (props) => {
  return (
    <div className={classes.FormGroup}>
      {props.children}
    </div>
  )
}
