import React, {Component} from 'react';


class Visual  extends Component {

  render() {
      return this.props.type === "img" ?
         <img style={{ width: '100%' }} src={this.props.src}/> :
         <><object
         width='100%'
         height='100%'
         aria-label='videoCard'
         data={this.props.src}></object>
         <span>video</span></>

  }
}
export default Visual