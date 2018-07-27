import React from 'react'
import Pub from './Pub/Pub';
import FormGroup from '../../UI/FormGroup/FormGroup';

const lookup = require('../../../ref/stationLookup');
const pubs = require('../../../ref/pubs');

export default () => {
  const pubElems = pubs.map((pub) => {
    return (
      <Pub
        id={pub}
        name='route'
        value={pub}
        label={lookup[pub].location}
        key={pub}
      />
    )
  });

  return (
    <FormGroup>
      <p>Stops</p>
      {pubElems}
    </FormGroup>
  )
}
