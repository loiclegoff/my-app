import { UPDATE_SELECTED_PART, UPDATE_PARTS } from '../actions'

const initialState = {
  parts: [],
  selectedPartId: undefined,
}

/**
 * Reducer
 */
const partReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PARTS:
      return {
        ...state,
        parts: action.parts,
      }
    case UPDATE_SELECTED_PART:
      return {
        ...state,
        selectedPartId: action.partId,
      }
    default:
      return state
  }
}

export default partReducer
