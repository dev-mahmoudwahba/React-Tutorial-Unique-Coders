class App extends React.Component {
  render() {
    return <div className="app">my app
        <Header/>
        <ListItems/>
        <AddItem/>
    </div>;
  }
}

class Header extends React.Component {
  render() {
    return <header>header </header>;
  }
}
class ListItems extends React.Component {
  render() {
    return <div> list item component

            <Item/>
            <Item/>
            <Item/>

    </div>;
  }
}

class Item extends React.Component {
  render() {
    return <div>item</div>;
  }
}

class AddItem extends React.Component {
  render() {
    return (
      <form>
        <input type="text" />
        <input type="submit" />
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
