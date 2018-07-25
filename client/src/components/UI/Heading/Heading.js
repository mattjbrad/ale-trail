import React from 'react'
import classes from './Heading.css';

export default (props) => {
  return (
    <p className={classes.Heading}>{props.children}</p>
  )
}
