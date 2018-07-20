import React, { Component } from 'react'

const hash = require('js-hash-code');

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
        // console.log('Submitting Route');
        // const route = this.getCurrentRoute(this.state.stops);
        // console.log(route);
        // const hashedRoute = hash(route);
        // console.log(hashedRoute);

        // axios.post('/trains', {from:'MAN', to: 'SYB'})
        //     .then((res) => {
        //         if(res.status===200){
        //             this.trainDataHandler(res.data);
        //         }
        //         this.props.history.push(`/route/${hashedRoute}`);
        //     }).catch((err) => {
        //         this.setState({trains:[]});
        //         console.log(err);
        //     })

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

    render() {
        return (
            <div>
                <h2>Pub Route Chooser</h2>
                <button onClick={this.submitRouteHander}>Submit</button>
            </div>
        )
    }
}
