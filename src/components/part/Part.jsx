import React from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setSelectedPartId } from '../../actions'
import Label from '../common/Label'

const Part = (props) => {
  const dispatch = useDispatch()
  const onPartSelected = () => {
    dispatch(setSelectedPartId(props.part.id))
  }
  return (
    <Card className='mb-2' onClick={onPartSelected}>
      <Card.Header>{props.part.title}</Card.Header>
      <Card.Body>
        <Label id={props.part.id} title={props.part.title} />
      </Card.Body>
    </Card>
  )
}
export default Part
