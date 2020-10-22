import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LeftSide from './components/LeftSide'
import MiddleSide from './components/MiddleSide'
import 'bootstrap/dist/css/bootstrap.min.css'

// extends the object Component
class App extends Component {
  // initiliaze initial state
  state = {
    robot_list: [],
    part_list: [],
  }

  // when component did mount, start to fetch data
  async componentDidMount() {
    const resp_robots = await fetch(
      'https://pure-temple-56604.herokuapp.com/robots'
    )
    const robot_list = await resp_robots.json()

    const resp_parts = await fetch(
      'https://pure-temple-56604.herokuapp.com/parts'
    )
    const part_list = await resp_parts.json()

    this.setState({ robot_list, part_list })
  }

  // render function use to update the virtual dom
  render() {
    return (
      <Container fluid>
        <Row>
          <h1> Welcome to robot shop</h1>
        </Row>
        <Row>
          <Col md={4} lg={4}>
            <LeftSide robots={this.state.robot_list} />
          </Col>
          <Col md={4} lg={4}>
            <MiddleSide parts={this.state.part_list} />
          </Col>
          <Col md={4} lg={4} />
        </Row>
      </Container>
    )
  }
}

//export the current classes in order to be used outside
export default App
