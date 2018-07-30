import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PubRoute from './containers/PubRoute/PubRoute';
import TrainInfo from './containers/TrainInfo/TrainInfo';
import Footer from './components/UI/Footer/Footer';

import Banner from './components/UI/Banner/Banner';
// import './App.css';

class App extends Component {
  	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Banner text="Real Ale Trail" />
					<Route exact path="/" component={PubRoute} />
					<Route path="/route/:id" component={TrainInfo} />
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
