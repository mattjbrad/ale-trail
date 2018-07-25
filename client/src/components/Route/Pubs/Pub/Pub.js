import React from 'react'
import Checkbox from '../../../UI/Checkbox/Checkbox';

export default (props) => {
  return (
    <Checkbox
      id={props.id}
      name={props.name}
      value={props.value}
      label={props.label}
    />
  )
}
