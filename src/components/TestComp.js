import React, { Component } from 'react'

 class TestComp extends Component {
    state =  {
        product : "laptop",
    }

    componentDidMount() {
        console.log("this is cdm life cycle");
    }

  render() {
    return (
      <div>
          this is TestComp {this.props.x}

      </div>
    )
  }
}
export default TestComp