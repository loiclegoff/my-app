import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'
import Description from './components/Description'
import { setSelectedPart } from '../../actions'

class InternalPart extends Component {
  // render function use to update the virtual dom
  onPartClick = () => {
    this.props.setSelectedPart(this.props.part.id)
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

const mapStateToProps = (state) => {
  return {
    selectedPartId: state.part.selectedPartId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedPart: (partId) => {
      dispatch(setSelectedPart(partId))
    },
  }
}

const Part = connect(mapStateToProps, mapDispatchToProps)(InternalPart)

//export the current classes in order to be used outside
export default Part
