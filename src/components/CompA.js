import React, { Component } from "react";
import withComp from "./withComp";
class CompA extends Component {
  render() {
    const { name, updateNameState } = this.props;
    return (
      <div>
        {this.props.test}
        {name}
        <button onClick={updateNameState}>update Name</button>
      </div>
    );
  }
}
export default CompA
