import React, { Component } from 'react'

 class comp extends Component {
  state = {
    name: " comp",
  };
  updateNameState = () => {
    this.setState({
      name: "comp 2",
    });
  };

  render() {
    return (
      <div>
          {this.props.test(this.state.name , this.updateNameState)}
      </div>
    )
  }
}
export default comp