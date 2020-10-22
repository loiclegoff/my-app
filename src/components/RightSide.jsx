import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap'
import Panel from './part/Panel'

class RightSide extends Component {
  getSelectedPart = () => {
    return this.props.parts.find(
      (part) => part.id === this.props.selectedPartId
    )
  }

  // render function use to update the virtual dom
  render() {
    if (this.props.parts.length < 1) {
      return <Spinner animation='border' />
    }

    return <Panel part={this.getSelectedPart()} />
  }
}

export default RightSide
