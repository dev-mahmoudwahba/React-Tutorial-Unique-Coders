"use strict";

var title = "react";
var fun = function fun() {
  return "hello react";
};

var ele = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "this is h1 jsx "
  ),
  React.createElement(
    "span",
    null,
    "hi this is span"
  ),
  React.createElement(
    "h2",
    null,
    " this is ",
    title,
    " "
  ),
  React.createElement(
    "span",
    null,
    " ",
    fun(),
    " "
  )
);

ReactDOM.render(ele, document.getElementById("app"));
