import React, { Component } from 'react'
import Part from './part/Part'
import { Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setParts } from '../actions'
class InternalMiddleSide extends Component {
  async componentDidMount() {
    const resp_parts = await fetch(
      'https://pure-temple-56604.herokuapp.com/parts'
    )
    const part_list = await resp_parts.json()
    this.props.setParts(part_list)
  }

  // render function use to update the virtual dom
  render() {
    if (
      this.props.selectedRobotId !== undefined &&
      this.props.parts.length < 1
    ) {
      return <Spinner animation='border' />
    }

    return (
      <div>
        {this.props.parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const selectedPartIds =
    state.robot.robots.find((robot) => robot.id === state.robot.selectedRobotId)
      ?.parts ?? []

  return {
    parts: state.part.parts.filter((part) => selectedPartIds.includes(part.id)),
    selectedRobotId: state.robot.selectedRobotId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setParts: (parts) => {
      dispatch(setParts(parts))
    },
  }
}

const MiddleSide = connect(
  mapStateToProps,
  mapDispatchToProps
)(InternalMiddleSide)

//export the current classes in order to be used outside
export default MiddleSide
