import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import Price from './Price'

class Description extends Component {
  // render function use to update the virtual dom
  render() {
    return (
      <Table>
        <tr>
          <td> ID </td>
          <td>{this.props.part.id}</td>
        </tr>
        <tr>
          <td> NAME </td>
          <td>{this.props.part.title}</td>
        </tr>
        <tr>
          <td> PRICE</td>
          <td>
            <Price value={this.props.part.price} type='d' />
          </td>
        </tr>
      </Table>
    )
  }
}

export default Description
