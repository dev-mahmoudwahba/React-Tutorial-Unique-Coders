import React, { Component } from 'react'
import CompB from './CompB'

 class CompA extends Component {
  render() {
    return (
      <div>
          Comp A
          <CompB  name = {this.props.name} />
      </div>
    )
  }
}
export default CompA