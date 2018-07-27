import React from 'react'
import Train from './Train/Train';

export default (props) => {

    const trainData = props.data;
    let trains;
    let display = null;
    if (trainData.length>0){
        trains = trainData.map((train, i) => {
            return <Train key={i} data={train} index={i}/>
        });
        display = (
            <div>
                <h2>Train Details</h2>
                <div>
                    {trains}
                </div>
            </div>
        )
    } else {
        display = (<h2>No trains have been found</h2>)
    }

    return display;
}
