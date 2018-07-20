import React from 'react'
import classes from './Banner.css';

export default (props) => {
  return (
    <div className={classes.Banner}>
      <h1>{props.text}</h1>
    </div>
  )
}
