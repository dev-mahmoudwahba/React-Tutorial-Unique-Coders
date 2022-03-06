import React, { Component, Fragment, PureComponent } from "react";
import "./App.css";
import CompA from "./components/CompA";
import { CnxtProvider } from "./components/ContextComp";
class App extends Component {
  state = {
    name: " app comp ",
  };

  render() {
    return (
      <CnxtProvider value={this.state.name} > 
        <div>
          <CompA />
        </div>
      </CnxtProvider>
    );
  }
}

export default App;
