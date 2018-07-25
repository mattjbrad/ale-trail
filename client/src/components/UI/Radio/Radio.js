import React from 'react'

export default (props) => {
  return (
      <React.Fragment>
        <input type="radio" id={props.id} name={props.name} value={props.value}/>
        <label htmlFor={props.id}>{props.label}</label>
      </React.Fragment>
  )
}
