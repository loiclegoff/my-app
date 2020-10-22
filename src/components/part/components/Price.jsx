import React from 'react'
import { Badge, Button } from 'react-bootstrap'

const Price = (props) => {
  // render function use to update the virtual dom

  return (
    <Button variant='primary'>
      Price <Badge>{props.value}</Badge>
    </Button>
  )
}

export default Price
