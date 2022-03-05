import React, { Component } from 'react'

 class CompA extends Component {
     state = {
         name : "comp A"
     }

     updateNameState = ()=> {
         this.setState({
             name : " comp A2"
         })
     }
  render() {
    return (
      <div>CompA
          <button onClick={this.updateNameState} >update Name</button>
      </div>
    )
  }
}
export default CompA