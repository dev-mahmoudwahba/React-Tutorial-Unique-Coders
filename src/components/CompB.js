import React, { Component } from 'react'
import withComp from './withComp'
 class CompB extends Component {
    
  render() {
    const {name , updateNameState} = this.props 
    return (
      <div>
        {name}
          <button onClick = {updateNameState} >update Name</button>
      </div>
    )
  }
}
export default withComp(CompB)