import React from 'react'
import Pub from './Pub/Pub';
import FormGroup from '../../UI/FormGroup/FormGroup';

const lookup = require('../../../ref/stationLookup');

export default (props) => {

	const pubElems = props.pubs.map((pub) => {
		return (
			<Pub
				id={pub.code}
				name='route'
				value={pub.code}
				label={lookup[pub.code].location}
				key={pub.code}
				change={props.change}
				checked={pub.visit}
			/>
		)
	});

	return (
		<FormGroup>
			<p>Stops</p>
			{pubElems}
		</FormGroup>
	)
}
