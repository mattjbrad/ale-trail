import React from 'react'
import classes from './Radio.css';

export default (props) => {
	return (
		<div className={classes.Div}>
			<div className={classes.Labels}>
				<label htmlFor={props.id}>{props.label}</label>
			</div>
			<div>
				<input type="radio" id={props.id} name={props.name} value={props.value}/>
			</div>
		</div>
	)
}
