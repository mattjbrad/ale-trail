import React, { Component } from 'react'

import Dropdown from '../../components/UI/Dropdown/Dropdown';
import stationLookup from '../../ref/stationLookup';

const axios = require('axios');

export default class TrainInfo extends Component {

	state = {
		route: [],
		dir: null,
		currentStop: null,
		nextStop: null,
		trains: []
	}

	getURLHash = () => {
		return this.props.location.pathname.slice(7, this.props.location.pathname.length);
	}

	setRouteData = (routeHash) => {
		axios.get(`/lookup/${routeHash}`)
			.then((res) => {
				if (res.data){
					this.setState({route:res.data.route, direction: res.data.dir});
				}
			}).catch((err) => {
				console.log(err);
			})
	}

	componentDidMount = () => {
		const routeHash = this.getURLHash();
		// console.log(routeHash);
		this.setRouteData(routeHash);
	}

	currentStopChangedHandler = (event) => {
		this.setState({currentStop:event.target.value});
	}
	render() {

		return (
			<div>
				<h2>Train Details</h2>
				<Dropdown 
					options={this.state.route}
					lookup={stationLookup}
					value={this.props.currentStop}
					display='location'
					change={this.currentStopChangedHandler}
				/>
			</div>
		)
	}
}
