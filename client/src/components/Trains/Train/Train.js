import React from 'react';
import Box from '../../UI/Box/Box';
import classes from './Train.css';
import Countdown from 'react-countdown-now';

export default (props) => {

  const lookup = {
    0: 'next',
    1: 'second',
    2: 'third'
  };

  //time regex
  const regex = /\d\d:\d\d/;

  let delay;
  if( regex.test(props.data.delay) ){
    delay = <p className={classes.warning}>There is a delay on this service, it is now leaving at <strong>{props.data.delay}</strong></p>
  } else if (props.data.delay !== "On time") {
    delay = <p className={classes.warning}>{props.data.delay}</p>
  }

  const now = new Date(); 
  const dd = now.getDate(); const mm = now.getMonth()+1; const yyyy = now.getFullYear();

  let trainTime = props.data.time;
  if ( regex.test(props.data.delay) ){
    trainTime = props.data.delay;
  }
  //build a string that the countdown component will accept
  const countdownDate = new Date(`${mm}/${dd}/${yyyy} ${trainTime}`);

  let countdown;
  if(props.index===0){
    countdown = <span className={classes.countDown}>You have <Countdown date={countdownDate} /></span>
  }

  return (
    <Box>
      <div>
        <p>The {lookup[props.index]} train is at <strong>{props.data.time}</strong> on <strong>Platform {props.data.platform}.</strong></p>
        <span className={classes.warning}>{delay}</span>
        {countdown}
      </div>
    </Box>
  )
}

