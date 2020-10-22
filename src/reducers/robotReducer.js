import { UPDATE_SELECTED_ROBOT, UPDATE_ROBOTS } from '../actions'

const initialState = {
  robots: [],
  selectedRobotId: undefined,
}

/**
 * Reducer
 */
const robotReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ROBOTS:
      return {
        ...state,
        robots: action.robots,
      }
    case UPDATE_SELECTED_ROBOT:
      return {
        ...state,
        selectedRobotId: action.robotId,
      }
    default:
      return state
  }
}

export default robotReducer
