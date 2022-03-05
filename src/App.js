import React, { Component, Fragment } from "react";
import "./App.css";
import Home from "./components/Home";
import CompA from "./components/CompA"
import CompB from "./components/CompB";
class App extends Component {
  state = {
    name: "app comp",
  };

  updateName = () => {
    this.setState({
      name: "app comp",
    });
  };
  render() {
    console.log("app comp");
    return (
      <Fragment >
        app components
        <CompA />
        <CompB />
        {/* <Home/>
      <button onClick={this.updateName}  > update</button> */}
      </Fragment>
    );
  }
}

export default App;
