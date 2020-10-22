/*
 * action types
 */
export const UPDATE_ROBOTS = 'UPDATE_ROBOTS'
export const UPDATE_SELECTED_ROBOT = 'UPDATE_SELECTED_ROBOT'
export const UPDATE_PARTS = 'UPDATE_PARTS'
export const UPDATE_SELECTED_PART = 'UPDATE_SELECTED_PART'

/*
 * action creators
 */

export function setRobots(robots) {
  return { type: UPDATE_ROBOTS, robots }
}

export function setSelectedRobot(robotId) {
  return { type: UPDATE_SELECTED_ROBOT, robotId }
}

export function setParts(parts) {
  return { type: UPDATE_PARTS, parts }
}

export function setSelectedPart(partId) {
  return { type: UPDATE_SELECTED_PART, partId }
}
