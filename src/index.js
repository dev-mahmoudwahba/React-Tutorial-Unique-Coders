class App extends React.Component {
  constructor() {
    super();
    this.state = {
      namee: "app cccccccccccc",
      title: "bla",
    };
    this.changeTitle = () => {
      console.log("d");
      this.setState({
        title: "new titleeeeeeeeeeee",
      });
    };
  }

  render() {
    console.log(this);

    return (
      <div className="app">
        {this.state.title}
        <br />
        <button onClick={this.changeTitle}>change title</button>
        {/* <Header item = {this.state.namee} />
        <ListItems pro="c" myTitle = {this.state.title} />*/}
        <br />
        <br />
        <br />
        <AddItem name="add" />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    console.log(this);

    return <header> {this.props.item} </header>;
  }
}
class ListItems extends React.Component {
  render() {
    console.log(this);

    return (
      <div>
        aaaaaa {this.props.myTitle}
        <Item />
        <Item />
        <Item />
      </div>
    );
  }
}

class Item extends React.Component {
  render() {
    return <div>item</div>;
  }
}

class AddItem extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "test",
    };
    this.changeValue = (e) => {
      this.setState({name: e.target.value});
    };
  }
  render() {
    console.log(this);

    return (
      <form>
        {this.state.name}
        <input type="text" onChange={this.changeValue} />
        <input type="submit" />
      </form>
    );
  }
}

ReactDOM.render(<App opps="opp " />, document.getElementById("app"));
