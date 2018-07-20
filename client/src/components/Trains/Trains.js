import React from 'react'
import Train from './Train/Train';

export default (props) => {

    const trainData = props.data;
    let trains = trainData.map((train) => {
        return <Train key={train.time} data={train} />
    });
    
    return (
        <div>
            {trains}
        </div>
    )
}
