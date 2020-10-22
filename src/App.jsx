import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'

import globalReducer from './reducers'

import LeftSide from './components/LeftSide'
import MiddleSide from './components/MiddleSide'
import RightSide from './components/RightSide'

import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(globalReducer)
// extends the object Component
class App extends Component {
  // initiliaze initial state
  state = {
    robot_list: [],
    part_list: [],
    selected_part_ids: [],
    selected_part_id: undefined,
  }

  getRobotFromId = (id) =>
    this.state.robot_list.find((robot) => robot.id === id)

  handleOnRobotSelected = (id) => {
    const current_robot = this.getRobotFromId(id)
    if (current_robot) {
      this.setState({ selected_part_ids: current_robot.parts })
    }
  }

  handleOnPartSelected = (id) => {
    this.setState({ selected_part_id: id })
  }

  // render function use to update the virtual dom
  render() {
    return (
      <Provider store={store}>
        <Container fluid>
          <Row>
            <h1> Welcome to robot shop</h1>
          </Row>
          <Row>
            <Col md={4} lg={4}>
              <LeftSide handleOnRobotSelected={this.handleOnRobotSelected} />
            </Col>
            <Col md={4} lg={4}>
              {this.state.selected_part_ids.length !== 0 && (
                <MiddleSide
                  parts={this.state.part_list}
                  selectedPartIds={this.state.selected_part_ids}
                  handleOnPartSelected={this.handleOnPartSelected}
                  selectedPartId={this.state.selected_part_id}
                />
              )}
            </Col>
            <Col md={4} lg={4}>
              {this.state.selected_part_id && (
                <RightSide
                  parts={this.state.part_list}
                  selectedPartId={this.state.selected_part_id}
                />
              )}
            </Col>
          </Row>
        </Container>
      </Provider>
    )
  }
}

// export the current classes in order to be used outside
export default App
