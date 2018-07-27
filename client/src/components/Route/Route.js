import React from 'react'

import Pubs from './Pubs/Pubs';
import Direction from './Direction/Direction';

export default (props) => {
  return (
    <div>
      <Direction change={props.directionChange} checked={props.directionValue}/>
      <Pubs change={props.stopChange} pubs={props.stopValue}/>
    </div>
  )
}
