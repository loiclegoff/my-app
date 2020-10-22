import React, { Component } from 'react'
import Robot from './robot/Robot'
import { Spinner } from 'react-bootstrap'

class LeftSide extends Component {
  state = {
    selectedId: undefined,
  }

  onRobotClick = (id) => {
    this.setState({ selectedId: id })
    this.props.handleOnRobotSelected(id)
  }

  //render function use to update the virtual dom
  render() {
    if (this.props.robots.length < 1) {
      return <Spinner animation='border' />
    }

    return (
      <div>
        {this.props.robots.map((robot) => (
          <Robot
            key={robot.id}
            robot={robot}
            selectedId={this.state.selectedId}
            onRobotClick={this.onRobotClick}
          />
        ))}
      </div>
    )
  }
}

//export the current classes in order to be used outside
export default LeftSide
