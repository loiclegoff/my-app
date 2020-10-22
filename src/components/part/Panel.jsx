import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'
import Visual from '../robot/components/Visual'
import Price from './components/Price'

class Panel extends Component {
  // render function use to update the virtual dom

  render() {
    return (
      <Jumbotron>
        <h1>{this.props.part.title}</h1>
        <p>{this.props.part.description}</p>
        <Visual
          src={this.props.part.visual_src}
          type={this.props.part.visual_type}
        />
        <Price value={this.props.part.price} />
      </Jumbotron>
    )
  }
}

export default Panel
