import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

class Label extends Component {
  render() {
    return (
      <Card.Subtitle>
        ID: {this.props.id}, title: {this.props.title}
      </Card.Subtitle>
    )
  }
}
export default Label
