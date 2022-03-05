import React, { Component } from 'react'

 class CompB extends Component {
     state = {
         name : " comp b"
     }
     updateNameStat = ()=> {
         this.setState({
             name : " comp b2"
         })
     }
  render() {
    return (
      <div>CompB
          <button onClick = {this.updateNameStat} >update Name</button>
      </div>
    )
  }
}
export default CompB