import React, { Component } from "react";
import TestComp from "./components/TestComp";
import TestHcomp from "./components/TestHcomp";

export default class App extends Component {
  state = {};

  render() {
    return <div>
      <TestHcomp x="x value" y="y value" />
      {/* <TestComp x="value " /> */}
    </div>
  }
}
