class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      item: "",
    };
   this.changeInputVal = this.changeInputVal.bind(this)
  //  this.deleteItem = this.deleteItem.bind(this)
  //  this.submitForm = this.submitForm.bind(this)
    this.submitForm = (e) => {
      e.preventDefault();
      let products = [
        ...this.state.products,
        {
          id: Math.random(),
          name: this.state.item,
        },
      ];
      this.setState({
        products,
        item: "",
      });
    };

    this.deleteItem = (id) => {
      let products = [...this.state.products];
      let newProducts = products.filter((product) => product.id != id);
      this.setState({
        products : newProducts
      })
    };
  }

  changeInputVal(e){
    this.setState({
      item: e.target.value,
    });
  };


  render() {
    console.log(this.state.products);
    return (
      <div className="app">
        {this.state.item}
        <Header />
        <ListItems products={this.state.products} removeItem={this.deleteItem} />
        <AddItem
          changeInput={this.changeInputVal}
          saveData={this.submitForm}
          item={this.state.item}
        />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return <header> header </header>;
  }
}
class ListItems extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.products.length == 0 &&  <div> there is no items  </div> }
        {this.props.products.map((product) => (
          <Item id={product.id} item={product.name} removeItem={this.props.removeItem} />
        ))}
      </div>
    );
  }
}

class Item extends React.Component {
  render() {
    return (
      <div>
        {" "}
        {this.props.item} <button onClick={ ()=> this.props.removeItem(this.props.id)}  > delete</button>
      </div>
    );
  }
}

class AddItem extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.saveData}>
        <input
          type="text"
          onChange={this.props.changeInput}
          value={this.props.item}
        />
        <input type="submit" />
      </form>
    );
  }
}

ReactDOM.render(<App opps="opp " />, document.getElementById("app"));
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
