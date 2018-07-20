import React from 'react'

export default (props) => {
    let options = props.options.map((option) => {
        return <option key={option} value={option}>{props.lookup[option][props.value]}</option> 
    })
    return (
        <select>
            {options}
        </select>
    )
}
