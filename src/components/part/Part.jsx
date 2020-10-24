import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import Description from './components/Description'
import { setSelectedPart } from '../../actions'

const Part = (props) => {
  const selectedPartId = useSelector((state) => state.part.selectedPartId)
  const dispatch = useDispatch()
  // render function use to update the virtual dom
  const onPartClick = () => {
    dispatch(setSelectedPart(props.part.id))
  }
  return (
    <Card
      className='mb-2'
      onClick={onPartClick}
      border={props.part.id === selectedPartId ? 'primary' : 'default'}>
      <Card.Header>
        <Card.Title>Part {props.part.id} description</Card.Title>
      </Card.Header>
      <Card.Body>
        <Description part={props.part} />
      </Card.Body>
    </Card>
  )
}

//export the current classes in order to be used outside
export default Part
