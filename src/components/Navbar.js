import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <NavLink activeClassName="x" to="/"> Home </NavLink>
        <NavLink activeClassName="x" to="/compa"> Comp A </NavLink>
        <NavLink activeClassName="x" to="/compb"> Comp B </NavLink>
        <NavLink activeClassName="x" to="/postlist"> postlist</NavLink>
        {/* <NavLink to="/"> Home </NavLink>
        <NavLink to="/compa"> Comp A </NavLink>
        <NavLink to="/compb"> Comp B </NavLink> */}
      </div>
    );
  }
}
