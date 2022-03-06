import React, { Component } from 'react'
import queryString from "query-string"
export default class Post extends Component {
  render() {
      const str = queryString.parse(this.props.location.search)
      console.log(str)
      console.log(this.props);
    return (
      <div>
      
         Post {this.props.match.params.id}
         my queryString is {str.name}
      </div>
    )
  }
}
