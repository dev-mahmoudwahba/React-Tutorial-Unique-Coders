"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      products: [],
      item: ""
    };
    _this.changeInputVal = _this.changeInputVal.bind(_this);
    //  this.deleteItem = this.deleteItem.bind(this)
    //  this.submitForm = this.submitForm.bind(this)
    _this.submitForm = function (e) {
      e.preventDefault();
      var products = [].concat(_toConsumableArray(_this.state.products), [{
        id: Math.random(),
        name: _this.state.item
      }]);
      _this.setState({
        products: products,
        item: ""
      });
    };

    _this.deleteItem = function (id) {
      var products = [].concat(_toConsumableArray(_this.state.products));
      var newProducts = products.filter(function (product) {
        return product.id != id;
      });
      _this.setState({
        products: newProducts
      });
    };
    return _this;
  }

  _createClass(App, [{
    key: "changeInputVal",
    value: function changeInputVal(e) {
      this.setState({
        item: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.products);
      return React.createElement(
        "div",
        { className: "app" },
        this.state.item,
        React.createElement(Header, null),
        React.createElement(ListItems, { products: this.state.products, removeItem: this.deleteItem }),
        React.createElement(AddItem, {
          changeInput: this.changeInputVal,
          saveData: this.submitForm,
          item: this.state.item
        })
      );
    }
  }]);

  return App;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "header",
        null,
        " header "
      );
    }
  }]);

  return Header;
}(React.Component);

var ListItems = function (_React$Component3) {
  _inherits(ListItems, _React$Component3);

  function ListItems() {
    _classCallCheck(this, ListItems);

    return _possibleConstructorReturn(this, (ListItems.__proto__ || Object.getPrototypeOf(ListItems)).apply(this, arguments));
  }

  _createClass(ListItems, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      console.log(this.props);
      return React.createElement(
        "div",
        null,
        this.props.products.length == 0 && React.createElement(
          "div",
          null,
          " there is no items  "
        ),
        this.props.products.map(function (product) {
          return React.createElement(Item, { id: product.id, item: product.name, removeItem: _this4.props.removeItem });
        })
      );
    }
  }]);

  return ListItems;
}(React.Component);

var Item = function (_React$Component4) {
  _inherits(Item, _React$Component4);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      var _this6 = this;

      return React.createElement(
        "div",
        null,
        " ",
        this.props.item,
        " ",
        React.createElement(
          "button",
          { onClick: function onClick() {
              return _this6.props.removeItem(_this6.props.id);
            } },
          " delete"
        )
      );
    }
  }]);

  return Item;
}(React.Component);

var AddItem = function (_React$Component5) {
  _inherits(AddItem, _React$Component5);

  function AddItem() {
    _classCallCheck(this, AddItem);

    return _possibleConstructorReturn(this, (AddItem.__proto__ || Object.getPrototypeOf(AddItem)).apply(this, arguments));
  }

  _createClass(AddItem, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: this.props.saveData },
        React.createElement("input", {
          type: "text",
          onChange: this.props.changeInput,
          value: this.props.item
        }),
        React.createElement("input", { type: "submit" })
      );
    }
  }]);

  return AddItem;
}(React.Component);

ReactDOM.render(React.createElement(App, { opps: "opp " }), document.getElementById("app"));
