import React from 'react'

export default (props) => {
  return (
    <div style={{width:'30%', border:'solid 1px black', height:'130px'}}>
      {props.children}
    </div>
  )
}
