import React, { Component, Fragment, PureComponent } from "react";
import "./App.css";
import Home from "./components/Home";
import CompA from "./components/CompA";
import CompB from "./components/CompB";
import Comp from "./components/comp";
import RenderProps from "./components/RenderProps"
class App extends Component {
  // state = {
  //   name: "app comp",
  // };

  // updateName = () => {
  //   this.setState({
  //     name: "app comp",
  //   });
  // };
  render() {
    // console.log("app compa");
    return (
      <Fragment>
        <Home/>
        {/* <Comp  test = {(arg1 , arg2)=> <CompA name={arg1} updateNameState={arg2}   />} /> */}
        {/* <RenderProps hamada = {(value , p2)=>{ */}
          {/*  return <div> {value} + {p2} </div> */}
        {/*  } } /> */}
        {/* <CompA test="test comp A" /> */}
        {/* <CompB /> */}
        {/* <Home/> */}
        {/* <button onClick={this.updateName}  > update</button>  */}
      </Fragment>
    );
  }
}

export default App;
