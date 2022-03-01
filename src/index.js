var title = "react";
var fun = () => {
  return "hello react";
};

var ele = (
  <div>
    <h1>this is h1 jsx </h1>
    <span>hi this is span</span>
    <h2> this is {title} </h2>
    <span> {fun()} </span>
  </div>
);

ReactDOM.render(ele, document.getElementById("app"));
