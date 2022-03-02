class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      option: "",
      submit: false
    };
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    console.log(e.target.id);
    this.setState({
      [e.target.id]: e.target.value,
      submit:false
    });
  }
  handleSubmit(e){
    e.preventDefault()
    this.setState({
      submit : true
    })
  }
  render() {
    console.log(this.state);
    return (
      <div className="app">
        <form onSubmit={this.handleSubmit} >
          <input type="text" onChange={this.handleChange} id="name" />
          <select onChange={this.handleChange} id="option">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <br />
          <input type="submit" />
          {this.state.submit && <div> {this.state.name} {this.state.option}  </div> }
        </form>
        {/* {this.state.items.map(item=> <div key={item.id} > {item.name} </div> )} */}
        {/* <ItemFun/> */}
        {/* <Header />
        <ListItems />
        <AddItem /> */}
      </div>
    );
  }
}
const ItemFun = () => {
  return <div>item funccccccccccc compo</div>;
};

class Header extends React.Component {
  render() {
    return <header> header </header>;
  }
}
class ListItems extends React.Component {
  render() {
    return <div></div>;
  }
}

class Item extends React.Component {
  render() {
    console.log(this);

    return <div>item</div>;
  }
}

class AddItem extends React.Component {
  render() {
    console.log(this);
    return (
      <form>
        <input type="text" />
        <input type="submit" />
      </form>
    );
  }
}

ReactDOM.render(<App opps="opp " />, document.getElementById("app"));
