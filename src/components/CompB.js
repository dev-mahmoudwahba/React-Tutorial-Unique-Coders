import React, { Component } from 'react'
import CompC from "./CompC"
 class CompB extends Component {
  render() {
    return (
      <div> 
          Comp B
          <CompC  name = {this.props.name}  />
      </div>
    )
  }
}
export default CompB