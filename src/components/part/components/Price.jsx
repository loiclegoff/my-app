import React, { Component } from 'react'
import { Badge, Button } from 'react-bootstrap'

class Price extends Component {
  // render function use to update the virtual dom
  render() {
    return (
      <Button variant='primary'>
        Price <Badge>{this.props.value}</Badge>
      </Button>
    )
  }
}

export default Price
