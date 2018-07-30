import React from 'react'
import classes from './Spinner.css';
export default (props) => {
  return (
    <React.Fragment>
      <p className={classes.LoadingText}>{props.loadingText}</p>
      <div className={classes.Spinner}></div>
    </ React.Fragment>
)
}
