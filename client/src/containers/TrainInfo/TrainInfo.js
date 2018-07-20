import React, { Component } from 'react'

import Trains from '../../components/Trains/Trains';
import Dropdown from '../../components/UI/Dropdown/Dropdown';
import Button from '../../components/UI/Button/Button';
import stationLookup from '../../ref/stationLookup';

const axios = require('axios');

export default class TrainInfo extends Component {

	state = {
		route: [],
		dir: null,
		currentStop: null,
		trains: [],
		loadingTrains: false
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
		this.setRouteData(routeHash);
	}

	currentStopChangedHandler = (event) => {
		this.setState({currentStop:event.target.value});
	}

	getTrainsHandler = () => {
		console.log('trains');
		const nextStation = this.getNextStation();
		if (nextStation){
			axios.post('/trains', { from:this.state.currentStop, to:nextStation})
				.then((trains) => {
					if(trains.status===200){
						this.trainDataHandler(trains.data);
					}
				})
				.catch((err) => {
					this.setState({trains:[]});
					console.log(err);
				});
		}
	}

	trainDataHandler = (trainData) => {
		let newTrains = [];
		if (trainData.length>1){
			trainData.forEach((train, i) => {
				let platform = null;
				if (train.platform){
					platform = train.platform[0];
				}
				newTrains[i] = {
					time: train.std[0],
					platform: platform,
					delay: train.etd[0]
				};
			});
			this.setState({trains:newTrains});
		} else {
			this.setState({trains:[]});
		}
	};

	getNextStation = () => {
		const visitingStops = [...this.state.route];
		let nextStop = null;
	 
		 if (visitingStops.length>0){
			//put leeds and manchester as ends of the route on either end
			visitingStops.push('lds');
			visitingStops.unshift('man');
			const index = visitingStops.indexOf(this.state.currentStop);
	 
			if (this.state.dir==="east"){
				nextStop = visitingStops[index+1];
			} else {
				nextStop = visitingStops[index-1];
			}
			   this.setState({nextStop:nextStop});
		}
	   
	   return nextStop;
	 
	 }

	render() {
		let trains;
		if (this.state.trains.length>0){
			trains = <Trains data={this.state.trains} />
		}

		return (
			<div>
				<h2>Train Details</h2>
				<a href="/">
					<Button text="Change Route"></Button>
				</a>
				<Dropdown 
					options={this.state.route}
					lookup={stationLookup}
					value={this.props.currentStop}
					display='location'
					change={this.currentStopChangedHandler}
					unassigned='Where are you?'
				/>
				<Button 
					clicked={this.getTrainsHandler}
					text="Get Trains" 
				/>
				{trains}
			</div>
		)
	}
}
