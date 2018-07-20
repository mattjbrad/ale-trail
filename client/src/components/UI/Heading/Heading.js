import React from 'react'
import classes from './Heading.css';

export default (props) => {
  return (
    <h2 className={classes.Heading}>{props.children}</h2>
  )
}
