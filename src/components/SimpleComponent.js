// Code SimpleComponentHere Here
import React, {Component} from 'react'
export default class SimpleComponent extends Component {
  constructor(){
    super()
    this.state = {
      mood: 'happy'
    }
  }
  handleClick = ()
  render(){
    return(
      <div onClick={this.handleClick}>
      {this.state.mood}
      </div>
    )
  }
}
