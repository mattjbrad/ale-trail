import React from 'react';
import Box from '../../UI/Box/Box';

export default (props) => {
  return (
    <div>
        <Box>
            <p>{props.data.time}</p>
            <p>{props.data.platform}</p>
            <p>{props.data.delay}</p>
        </Box>
    </div>
  )
}
