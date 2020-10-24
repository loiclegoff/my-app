import React from 'react'
import { Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Label from './common/Label'
import Search from './part/Search'

const Description = () => {
  const parts = useSelector((state) => state.partReducer.listParts)
  const selectedPartId = useSelector((state) => state.partReducer.selectPartId)
  const part = parts.find((part) => part.id === selectedPartId)
  return part ? <Label id={part.id} title={part.title} /> : null
}

const RightSide = () => {
  return (
    <Col md={4} lg={4}>
      <Search />
      <Description />
    </Col>
  )
}

export default RightSide
