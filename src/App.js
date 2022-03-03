import React, { Component } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer" 
import "./App.css"
import myImg from "./assets/pocLogo_black.png"
import List from "./components/List"


class App extends Component {
  state = {
  products : [
    {id : 1, title: "item1"},
    {id : 2, title: "item2"},
    {id : 3, title: "item2"},
    {id : 4, title: "item2"},
    {id : 5, title: "item2"}
  ]
  }
  render() {
    console.log(this.state);
    return <div className="App">
      <img src={myImg}/>
          {this.state.desc}
          <Header title="header comp2" desc="this uis header desc by me"  newData={this.state.desc}  />
          <List products={this.state.products} />
           <Footer title="footer comp"  />
      </div>;
  }
}

export default App;
