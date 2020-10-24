import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import Robot from './robot/Robot'

class LeftSide extends Component {
  render() {
    return (
      <Col md={4} lg={4}>
        {this.props.listRobots.map((robot) => (
          <Robot key={robot.id} robot={robot} />
        ))}
      </Col>
    )
  }
}
export default LeftSide
