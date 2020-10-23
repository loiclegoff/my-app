import React, {Component} from 'react';
import {Button, Container, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LeftSide from "./components/LeftSide"
import MiddleSide from "./components/MiddleSide"
import {setRobots} from "./actions"
import { connect } from 'react-redux';

class InternalApp extends Component {
  state = {
    listParts: [],
    selectedPartIds: []
  }

  componentDidMount() {
    fetch("https://pure-temple-56604.herokuapp.com/robots").then(
      resp => resp.json()).then(listRobots => this.props.loadRobotsList(listRobots))
    fetch("https://pure-temple-56604.herokuapp.com/parts").then(
        resp => resp.json()).then(listParts => this.setState({listParts}))
  }

  handleRobotSelected = (id) => {
    const selectedPartIds = this.props.listRobots.find(robot => robot.id === id).parts
    this.setState({selectedPartIds})
  }

  render() {
    return (
        <Container>
          <Row>
            <LeftSide listRobots={this.props.listRobots} onRobotSelected={this.handleRobotSelected}/>
            <MiddleSide listParts={this.state.listParts.filter(part => this.state.selectedPartIds.includes(part.id))}/>
            <Col md={4} lg={4}>{JSON.stringify(this.state.listParts)}</Col>
            <Col md={4} lg={4}>Col3</Col>
          </Row>
        </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    listRobots: state.robots
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadRobotsList: (robots) => dispatch(setRobots(robots))
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(InternalApp)

export default App
