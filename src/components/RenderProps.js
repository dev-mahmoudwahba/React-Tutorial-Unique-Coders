import React, { Component } from 'react'

 class RenderProps extends Component {
     state = {
         name : "regregrgeeg"
     }
  render() {
    return (    
      <div>
          {this.props.hamada(this.state.name , "wwwwwwwwww")}
      </div>
    )
  }
}
export default RenderProps