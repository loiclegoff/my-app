import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Label from './components/Label'
import Visual from './components/Visual'

class Robot extends Component {
  onRobotClick = () => {
    this.props.onRobotClick(this.props.robot.id)
  }
  //render function use to update the virtual dom
  render() {
    return (
      <Card
        className='mb-2'
        border={
          this.props.robot.id === this.props.selectedId ? 'primary' : 'default'
        }
        onClick={this.onRobotClick}>
        <Card.Header>
          <Card.Title>Robot {this.props.robot.id} description</Card.Title>
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
