import React from 'react'
import classes from './Checkbox.css';

export default (props) => {
	return (
		<div className={classes.Div}>
			<div className={classes.Labels}>
				<label htmlFor={props.id}>
					<span>{props.label}</span>
					<input onChange={props.change} checked={props.checked} type="checkbox" className={classes.Checkbox}id={props.id} name={props.name} value={props.value} />
				</label>
			</div>
		</div>
	)
}
