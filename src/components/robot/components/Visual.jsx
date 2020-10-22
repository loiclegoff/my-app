import React, { Component } from 'react'

class Visual extends Component {
  getRenderVisual = () => {
    switch (this.props.type) {
      case 'img':
        return (
          <img alt='imgCard' style={{ width: '100%' }} src={this.props.src} />
        )
      case 'video':
        return (
          <object
            width='100%'
            height='100%'
            aria-label='videoCard'
            data={this.props.src}></object>
        )
      default:
        throw Error('Not supported type')
    }
  }

  render() {
    return <div className='thumbnail'>{this.getRenderVisual()}</div>
  }
}

export default Visual
