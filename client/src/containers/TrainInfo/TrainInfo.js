import React, { Component } from 'react'

const axios = require('axios');

export default class TrainInfo extends Component {

	state = {
		route: [],
		dir: null,
		currentStop: 'syb',
		nextStop: null,
		trains: []
	}

	componentDidMount = () => {
		const routeHash = this.props.location.pathname.slice(7, this.props.location.pathname.length);
		// console.log(routeHash);
		axios.get(`/lookup/${routeHash}`)
			.then((res) => {
				console.log(res);
				this.setState({route:res.data.route, direction: res.data.dir});
			}).catch((err) => {
				console.log(err);
			})
	}

	render() {
		
		return (
			<div>
				<h2>Train Details</h2>
			</div>
		)
	}
}
