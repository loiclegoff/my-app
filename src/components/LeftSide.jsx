import React, { useEffect } from 'react'
import Robot from './robot/Robot'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setRobots } from '../actions'

const LeftSide = () => {
  const robots = useSelector((state) => state.robot.robots)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const resp_robots = await fetch(
        'https://pure-temple-56604.herokuapp.com/robots'
      )
      const robots = await resp_robots.json()
      dispatch(setRobots(robots))
    }
    fetchData()
  }, [dispatch])

  //render function use to update the virtual dom

  if (robots.length < 1) {
    return <Spinner animation='border' />
  }

  return (
    <div>
      {robots.map((robot) => (
        <Robot key={robot.id} robot={robot} />
      ))}
    </div>
  )
}

//export the current classes in order to be used outside
export default LeftSide
