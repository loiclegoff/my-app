import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LeftSide from './components/LeftSide'
import 'bootstrap/dist/css/bootstrap.min.css'

// extends the object Component
class App extends Component {
  // initiliaze initial state
  state = {
    robot_list: [],
  }

  // when component did mount, start to fetch data
  async componentDidMount() {
    const resp = await fetch('https://pure-temple-56604.herokuapp.com/robots')
    const robot_list = await resp.json()
    this.setState({ robot_list })
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
          <Col md={4} lg={4} />
          <Col md={4} lg={4} />
        </Row>
      </Container>
    )
  }
}

//export the current classes in order to be used outside
export default App
