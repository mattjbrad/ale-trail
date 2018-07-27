import React, { Component } from 'react'

import Heading from '../../components/UI/Heading/Heading';
import Button from '../../components/UI/Button/Button';
import Route from '../../components/Route/Route';
import classes from './PubRoute.css';
const hash = require('object-hash');

export default class PubRoute extends Component {

    state = {
        direction: 'west',
        stops: [
            { code : 'syb', visit : true, },
            { code : 'gnf', visit : true, },
            { code : 'msn', visit : true, },
            { code : 'swt', visit : true, },
            { code : 'hud', visit : true, },
            { code : 'mir', visit : true, },
            { code : 'dew', visit : true, },
            { code : 'btl', visit : true, },
        ]
    }

    getCurrentRoute = (stops) => {
        const visiting = stops
            .filter(stop => stop.visit)
            .map(stop => stop.code);
    
        return {dir: this.state.direction, route: visiting};
    }

    submitRouteHander = () => {
        const route = this.getCurrentRoute(this.state.stops);
        const hashedRoute = hash(route);
        this.props.history.push(`/route/${hashedRoute}`);
    }

    //move to seperate file as it is just a data function
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
            console.log(newTrains);
            this.setState({trains:newTrains});
        }
    };

    directionChangeHandler = (event) => {
        this.setState({direction:event.target.value});
    }

    stopChangeHandler = (event) => {
        let stops = [...this.state.stops];
        const pub = event.target.value;
        const newStop = stops.find((stop)=>{
            return stop.code === pub;
        });
        const stopIndex = stops.findIndex(i => i.code === newStop.code);
        newStop.visit = !newStop.visit;
        stops[stopIndex] = newStop;
        this.setState({stops : stops});
    }

    render() {
        return (
            <div className={classes.PubRoute}>
                <Heading>Choose your route</Heading>
                <Route
                    directionChange={this.directionChangeHandler}
                    directionValue={this.state.direction}
                    stopChange={this.stopChangeHandler}
                    stopValue={this.state.stops}
                />
                <Button clicked={this.submitRouteHander} text='Select'/>
            </div>
        )
    }
}
