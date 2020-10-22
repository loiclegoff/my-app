import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Label from './components/Label'
import Visual from './components/Visual'

class Robot extends Component {
  //render function use to update the virtual dom
  render() {
    return (
      <Card className='mb-2'>
        <Card.Header>
          <Card.Title>Robot {this.props.id} description</Card.Title>
        </Card.Header>
        <Card.Body>
          <Label title={this.props.robot.title} id={this.props.robot.id} />
          <Visual
            type={this.props.robot.visual_type}
            src={this.props.robot.visual_src}
          />
        </Card.Body>
      </Card>
    )
  }
}

export default Robot
