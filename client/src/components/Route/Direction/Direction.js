import React from 'react'
import Radio from '../../UI/Radio/Radio';
import FormGroup from '../../UI/FormGroup/FormGroup';

export default (props) => {
  return (
    <FormGroup>
        <p>Direction</p>
        <Radio checked={props.checked} change={props.change} id='west' name='direction' value='west' label="West" />
        <Radio checked={props.checked} change={props.change} id='east' name='direction' value='east' label="East" />
    </FormGroup>
  )
}
