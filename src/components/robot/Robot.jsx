import React from 'react'
import { Card } from 'react-bootstrap'
import { setSelectedRobotId } from '../../actions'
import Label from '../common/Label'
import Visual from './components/Visual'
import { useDispatch } from 'react-redux'

const Robot = (props) => {
  const dispatch = useDispatch()
  const onRobotSelected = () => {
    dispatch(setSelectedRobotId(props.robot.id))
  }
  return (
    <Card className='mb-2' onClick={onRobotSelected}>
      <Card.Header>{props.robot.title}</Card.Header>
      <Card.Body>
        <Label id={props.robot.id} title={props.robot.title} />
        <Visual type={props.robot.visual_type} src={props.robot.visual_src} />
      </Card.Body>
    </Card>
  )
}

// class InternalRobot  extends Component {

//   onRobotSelected = () => {
//     this.props.onRobotSelected(this.props.robot.id)
//   }
//   render() {
//     return (
//         <Card className="mb-2" onClick={this.onRobotSelected}>
//             <Card.Header>
//                 {this.props.robot.title}
//             </Card.Header>
//             <Card.Body>
//                 <Label id={this.props.robot.id} title={this.props.robot.title}/>
//                 <Visual type={this.props.robot.visual_type} src={this.props.robot.visual_src}/>
//             </Card.Body>
//         </Card>
//     )
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onRobotSelected: (id) => dispatch(setSelectedRobotId(id))
//     }
// }

// const Robot = connect(null, mapDispatchToProps)(InternalRobot)

export default Robot
