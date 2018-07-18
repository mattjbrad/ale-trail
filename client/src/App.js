import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PubRoute from './containers/PubRoute/PubRoute';
import TrainInfo from './containers/TrainInfo/TrainInfo';
// import './App.css';

class App extends Component {
  	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<h1>Ale Trail</h1>
					<Route exact path="/" component={PubRoute} />
					<Route path="/route/:id" component={TrainInfo} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
