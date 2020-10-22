import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'

import globalReducer from './reducers'

import LeftSide from './components/LeftSide'
import MiddleSide from './components/MiddleSide'
import RightSide from './components/RightSide'

import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(
  globalReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// extends the object Component
const App = () => {
  // render function use to update the virtual dom
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
            <RightSide />
          </Col>
        </Row>
      </Container>
    </Provider>
  )
}

// export the current classes in order to be used outside
export default App
