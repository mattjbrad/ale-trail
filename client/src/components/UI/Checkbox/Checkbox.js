import React from 'react'

export default (props) => {
  return (
    <React.Fragment>
      <input type="checkbox" id={props.id} name={props.name} value={props.value} />
      <label for={props.name}>{props.label}</label>
    </React.Fragment>
  )
}
