import React, { Component } from 'react'
import Part from './part/Part'
import { Spinner } from 'react-bootstrap'

class MiddleSide extends Component {
  // render function use to update the virtual dom
  render() {
    if (this.props.parts.length < 1) {
      return <Spinner animation='border' />
    }

    return (
      <div>
        {this.props.parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </div>
    )
  }
}

// export the current classes in order to be used outside
export default MiddleSide
