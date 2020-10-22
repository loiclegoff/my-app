import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Visual from '../robot/components/Visual'
import Price from './components/Price'

const Panel = (props) => {
  // render function use to update the virtual dom

  return (
    <Jumbotron>
      <h1>{props.part.title}</h1>
      <p>{props.part.description}</p>
      <Visual src={props.part.visual_src} type={props.part.visual_type} />
      <Price value={props.part.price} />
    </Jumbotron>
  )
}

export default Panel
