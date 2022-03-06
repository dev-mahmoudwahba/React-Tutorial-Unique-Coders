import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CompA from "./components/CompA";
import CompB from "./components/CompB";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/> 
        <Route path="/" exact component={Home}  />
        <Route path="/compa" exact component={CompA} />
        <Route path="/compb" exact component={CompB} />
        </BrowserRouter>
      </div>
    );
  }
}
