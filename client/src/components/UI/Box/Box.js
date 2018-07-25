import React from 'react'
import classes from './Box.css';

export default (props) => {
  return (
      <div className={classes.Box}>
        {props.children}
      </div>
  )
}
