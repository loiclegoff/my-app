import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import Part from "./part/Part"

class MiddleSide extends Component {

  render() {
    return (
        <Col md={4} lg={4}>
            {
                this.props.listParts.map(part => <Part key={part.id} part={part}/>)
            }
        </Col>
    )
  }
}
export default MiddleSide
