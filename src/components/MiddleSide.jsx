import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Part from './part/Part'
import { Spinner } from 'react-bootstrap'
import { setParts } from '../actions'

import { createSelector } from 'reselect'

const selectPartsOfSelectedRobot = createSelector(
  (state) => state.robot.robots,
  (state) => state.robot.selectedRobotId,
  (robots, selectedRobotId) =>
    robots.find((robot) => robot.id === selectedRobotId)?.parts ?? []
)

const MiddleSide = () => {
  const selectedPartIds = useSelector(selectPartsOfSelectedRobot)
  const allParts = useSelector((state) => state.part.parts)
  const parts = allParts.filter((part) => selectedPartIds.includes(part.id))
  const selectedRobotId = useSelector((state) => state.robot.selectedRobotId)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const resp_parts = await fetch(
        'https://pure-temple-56604.herokuapp.com/parts'
      )
      const parts = await resp_parts.json()
      dispatch(setParts(parts))
    }
    fetchData()
  }, [dispatch])

  if (selectedRobotId !== undefined && parts.length < 1) {
    return <Spinner animation='border' />
  }

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}

//export the current classes in order to be used outside
export default MiddleSide
