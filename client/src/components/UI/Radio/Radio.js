import React from 'react'
import classes from './Radio.css';

export default (props) => {
	let checked = false;
	if(props.checked===props.value){
		checked=true;
	}

	return (
		<div className={classes.Div}>
			<div className={classes.Labels}>
				<label htmlFor={props.id}>{props.label}</label>
			</div>
			<div>
				<input checked={checked} onClick={props.change} className={classes.Radio} type="radio" id={props.id} name={props.name} value={props.value}/>
			</div>
		</div>
	)
}
