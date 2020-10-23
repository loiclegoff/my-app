import React, {Component} from 'react';
import {Button, Container, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LeftSide from "./components/LeftSide"
class App extends Component {
  state = {
    listRobots: []
  }

  componentDidMount() {
    fetch("https://pure-temple-56604.herokuapp.com/robots").then(
      resp => resp.json()).then(listRobots => this.setState({listRobots}))

  }

  render() {
    return (
        <Container>
          <Row>
            <LeftSide listRobots={this.state.listRobots}/>
            <Col md={4} lg={4}>Col2</Col>
            <Col md={4} lg={4}>Col3</Col>
          </Row>
        </Container>

    )
  }
}
export default App
