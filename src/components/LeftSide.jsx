import React, { Component } from 'react'
import Robot from './robot/Robot'
import { Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setRobots } from '../actions'
class InternalLeftSide extends Component {
  async componentDidMount() {
    const resp_robots = await fetch(
      'https://pure-temple-56604.herokuapp.com/robots'
    )
    const robot_list = await resp_robots.json()
    this.props.setRobots(robot_list)
  }

  //render function use to update the virtual dom
  render() {
    if (this.props.robots.length < 1) {
      return <Spinner animation='border' />
    }

    return (
      <div>
        {this.props.robots.map((robot) => (
          <Robot key={robot.id} robot={robot} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    robots: state.robot.robots,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRobots: (robots) => {
      dispatch(setRobots(robots))
    },
  }
}

const LeftSide = connect(mapStateToProps, mapDispatchToProps)(InternalLeftSide)

//export the current classes in order to be used outside
export default LeftSide
