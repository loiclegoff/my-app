import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedRobot } from '../../actions'
import { Card } from 'react-bootstrap'
import Label from './components/Label'
import Visual from './components/Visual'

class InternalRobot extends Component {
  onRobotClick = () => {
    this.props.setSelectedRobot(this.props.robot.id)
  }
  //render function use to update the virtual dom
  render() {
    return (
      <Card
        className='mb-2'
        border={
          this.props.robot.id === this.props.selectedRobotId
            ? 'primary'
            : 'default'
        }
        onClick={this.onRobotClick}>
        <Card.Header>
          <Card.Title>Robot {this.props.robot.id} description</Card.Title>
        </Card.Header>
        <Card.Body>
          <Label title={this.props.robot.title} id={this.props.robot.id} />
          <Visual
            type={this.props.robot.visual_type}
            src={this.props.robot.visual_src}
          />
        </Card.Body>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedRobotId: state.robot.selectedRobotId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedRobot: (robotId) => {
      dispatch(setSelectedRobot(robotId))
    },
  }
}

const Robot = connect(mapStateToProps, mapDispatchToProps)(InternalRobot)

//export the current classes in order to be used outside
export default Robot
