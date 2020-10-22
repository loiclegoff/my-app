import React from 'react'

const Visual = (props) => {
  const getRenderVisual = () => {
    switch (props.type) {
      case 'img':
        return <img alt='imgCard' style={{ width: '100%' }} src={props.src} />
      case 'video':
        return (
          <object
            width='100%'
            height='100%'
            aria-label='videoCard'
            data={props.src}></object>
        )
      default:
        throw Error('Not supported type')
    }
  }

  return <div className='thumbnail'>{getRenderVisual()}</div>
}

export default Visual
