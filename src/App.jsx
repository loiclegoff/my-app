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
    selected_part_id: undefined,
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
              <LeftSide />
            </Col>
            <Col md={4} lg={4}>
              <MiddleSide />
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
