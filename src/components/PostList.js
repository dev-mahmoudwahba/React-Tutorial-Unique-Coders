import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class PostList extends Component {
    state = {
        lists : [
            {id : 1 , name : "post 1"},
            {id : 2 , name : "post 2"},
            {id : 3 , name : "post 3"}
        ]
    }
  render() {
    return (
      <div>
          {
              this.state.lists.map( list=> <NavLink  to={"/postlist/" + list.id + "?name=post" + list.id }  key={list.id}> {list.name} </NavLink> )
          }
      </div>
    )
  }
}
