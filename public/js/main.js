"use strict";

var toggle = false;
var toggleText = function toggleText() {
    toggle = !toggle;
    render();
};
function render() {
    var content = React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: toggleText },
            "toggle text"
        ),
        toggle ? React.createElement(
            "p",
            null,
            "this is text"
        ) : ""
    );

    ReactDOM.render(content, document.getElementById("app"));
}

render();
