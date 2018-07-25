import React from 'react'
import Radio from '../../UI/Radio/Radio';
import FormGroup from '../../UI/FormGroup/FormGroup';

export default () => {
  return (
    <FormGroup>
        <p>Direction</p>
        <Radio id='east' name='direction' value='east' label="East" />
        <Radio id='west' name='direction' value='west' label="West" />
    </FormGroup>
  )
}
