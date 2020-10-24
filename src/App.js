import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import LeftSide from './components/LeftSide'
import MiddleSide from './components/MiddleSide'
import { setParts, setRobots } from './actions'
import { connect } from 'react-redux'
import RightSide from './components/RightSide'

class InternalApp extends Component {
  componentDidMount() {
    fetch('https://pure-temple-56604.herokuapp.com/robots')
      .then((resp) => resp.json())
      .then((listRobots) => this.props.loadRobotsList(listRobots))
    fetch('https://pure-temple-56604.herokuapp.com/parts')
      .then((resp) => resp.json())
      .then((listParts) => this.props.loadPartsList(listParts))
  }

  render() {
    return (
      <Container>
        <Row>
          <LeftSide listRobots={this.props.listRobots} />
          <MiddleSide />
          <RightSide />
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    listRobots: state.robotReducer.listRobots,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadRobotsList: (robots) => dispatch(setRobots(robots)),
    loadPartsList: (parts) => dispatch(setParts(parts)),
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(InternalApp)

export default App
