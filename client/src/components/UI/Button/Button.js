import React from 'react'

export default (props) => {
    return (
        <button onClick={props.clicked}>{props.text}</button>
    )
}
