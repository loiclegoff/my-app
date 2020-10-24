import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import Part from './part/Part'
import { connect } from 'react-redux'

class InternalMiddleSide extends Component {
  render() {
    return (
      <Col md={4} lg={4}>
        {this.props.listParts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </Col>
    )
  }
}

const mapStateToProps = (state) => {
  const selectRobotId = state.robotReducer.selectRobotId
  const robot = state.robotReducer.listRobots.find(
    (robot) => robot.id === selectRobotId
  )

  return {
    listParts: robot
      ? state.partReducer.listParts.filter((part) =>
          robot.parts.includes(part.id)
        )
      : [],
  }
}

const MiddleSide = connect(mapStateToProps)(InternalMiddleSide)

export default MiddleSide
