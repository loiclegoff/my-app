import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import Label from "./components/Label"
import Visual from "./components/Visual"

class Robot  extends Component {

  render() {
    return (
        <Card>
            <Card.Header>
                {this.props.robot.title}
            </Card.Header>
            <Card.Body>
                <Label id={this.props.robot.id} title={this.props.robot.title}/>
                <Visual type={this.props.robot.visual_type} src={this.props.robot.visual_src}/>
            </Card.Body>
        </Card>
    )
  }
}
export default Robot