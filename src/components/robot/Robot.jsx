import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedRobot } from '../../actions'
import { Card } from 'react-bootstrap'
import Label from './components/Label'
import Visual from './components/Visual'

const Robot = (props) => {
  const selectedRobotId = useSelector((state) => state.robot.selectedRobotId)
  const dispatch = useDispatch()

  const onRobotClick = () => {
    dispatch(setSelectedRobot(props.robot.id))
  }
  //render function use to update the virtual dom
  return (
    <Card
      className='mb-2'
      border={props.robot.id === selectedRobotId ? 'primary' : 'default'}
      onClick={onRobotClick}>
      <Card.Header>
        <Card.Title>Robot {props.robot.id} description</Card.Title>
      </Card.Header>
      <Card.Body>
        <Label title={props.robot.title} id={props.robot.id} />
        <Visual type={props.robot.visual_type} src={props.robot.visual_src} />
      </Card.Body>
    </Card>
  )
}

//export the current classes in order to be used outside
export default Robot
