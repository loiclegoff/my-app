import React, {Component} from 'react';
import {Button, Container, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LeftSide from "./components/LeftSide"
class App extends Component {
  state = {
    listRobots: [],
    listParts: []
  }

  componentDidMount() {
    fetch("https://pure-temple-56604.herokuapp.com/robots").then(
      resp => resp.json()).then(listRobots => this.setState({listRobots}))
    fetch("https://pure-temple-56604.herokuapp.com/parts").then(
        resp => resp.json()).then(listParts => this.setState({listParts}))
  }

  render() {
    return (
        <Container>
          <Row>
            <LeftSide listRobots={this.state.listRobots}/>
    <Col md={4} lg={4}>{JSON.stringify(this.state.listParts)}</Col>
            <Col md={4} lg={4}>Col3</Col>
          </Row>
        </Container>

    )
  }
}
export default App
