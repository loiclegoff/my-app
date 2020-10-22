import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Description from './components/Description'

class Part extends Component {
  // render function use to update the virtual dom
  onPartClick = () => {
    this.props.handleOnPartSelected(this.props.part.id)
  }
  render() {
    return (
      <Card
        className='mb-2'
        onClick={this.onPartClick}
        border={
          this.props.part.id === this.props.selectedPartId
            ? 'primary'
            : 'default'
        }>
        <Card.Header>
          <Card.Title>Part {this.props.part.id} description</Card.Title>
        </Card.Header>
        <Card.Body>
          <Description part={this.props.part} />
        </Card.Body>
      </Card>
    )
  }
}

export default Part
