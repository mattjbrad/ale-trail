import React from 'react';
import Box from '../../UI/Box/Box';
import classes from './Train.css';

export default (props) => {

  const lookup = {
    0: 'first',
    1: 'second',
    2: 'third'
  };
  let delay;
  if(props.data.delay!== 'On time'){
    delay = <p className={classes.warning}>There is a delay on this service, it is now leaving at <strong>{props.data.delay}</strong></p>
  }

  return (
    <Box>
      <div>
        <p>The {lookup[props.index]} train is at <strong>{props.data.time}</strong> on <strong>Platform {props.data.platform}.</strong></p>
        <span className={classes.warning}>{delay}</span>
      </div>
    </Box>
  )
}

