import React, { Component } from 'react'

export default class TrainInfo extends Component {

	state = {
		currentStop: 'syb',
		nextStop: null,
		trains: []
	}

	render() {
		return (
			<div>
				<h2>Train Details</h2>
			</div>
		)
	}
}
