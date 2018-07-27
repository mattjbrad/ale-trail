import React from 'react'

import Pubs from './Pubs/Pubs';
import Direction from './Direction/Direction';

export default (props) => {
  console.log(props.pubs)
  return (
    <div>
      <Direction change={props.directionChange} checked={props.directionValue}/>
      <Pubs />
    </div>
  )
}
