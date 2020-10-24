/*
 * action types
 */
export const UPDATE_ROBOTS = 'UPDATE_ROBOTS'
export const UPDATE_PARTS = 'UPDATE_PARTS'
export const SELECT_ROBOT_ID = 'SELECT_ROBOT_ID'
export const SELECT_PART_ID = 'SELECT_PART_ID'

/*
 * action creators
 */

export function setRobots(robots) {
  return { type: UPDATE_ROBOTS, robots }
}

export function setParts(parts) {
  return { type: UPDATE_PARTS, parts }
}

export function setSelectedRobotId(robotId) {
  return { type: SELECT_ROBOT_ID, robotId }
}

export function setSelectedPartId(partId) {
  return { type: SELECT_PART_ID, partId }
}
