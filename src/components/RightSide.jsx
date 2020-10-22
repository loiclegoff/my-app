import React from 'react'
import { useSelector } from 'react-redux'
import Panel from './part/Panel'
import { createSelector } from 'reselect'

const selectPart = createSelector(
  (state) => state.part.parts,
  (state) => state.part.selectedPartId,
  (parts, selectedPartId) => parts.find((part) => part.id === selectedPartId)
)

const RightSide = () => {
  const part = useSelector(selectPart)
  // render function use to update the virtual dom
  return <> {part && <Panel part={part} />} </>
}

export default RightSide
