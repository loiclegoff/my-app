/*
 * action types
 */
export const UPDATE_ROBOTS = 'UPDATE_ROBOTS'

/*
 * action creators
 */

export function setRobots(robots) {
  return { type: UPDATE_ROBOTS, robots }
}