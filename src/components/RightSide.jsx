import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap'
import Panel from './part/Panel'
import { connect } from 'react-redux'

class InternalRightSide extends Component {
  // render function use to update the virtual dom
  render() {
    return <> {this.props.part && <Panel part={this.props.part} />} </>
  }
}

const mapStateToProps = (state) => {
  return {
    part: state.part.parts.find(
      (part) => part.id === state.part.selectedPartId
    ),
  }
}

const RightSide = connect(mapStateToProps)(InternalRightSide)

export default RightSide
