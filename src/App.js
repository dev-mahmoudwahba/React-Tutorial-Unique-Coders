import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CompA from "./components/CompA";
import CompB from "./components/CompB";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import PostList from "./components/PostList";
import axios from "axios"
export default class App extends Component {
  state = {
    // name : "app",
    // posts : []
    userid : "",
    title : "",
    body : ""

  }

  // componentDidMount() {
  //     axios.get("https://jsonplaceholder.typicode.com/posts")
  //     .then(res=> this.setState({
  //       posts : res.data
  //     }))
  //     .catch(err=> console.log(err))
  // }
  changeData = (e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  submitData  = (e)=>{
    e.preventDefault()
    console.log(this.state);
    axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
    .then(res=> console.log(res))
  }

  render() {
    return (
      <div>
        <BrowserRouter>

      <form onSubmit={this.submitData}>
        <input name="userid" type="text" onChange={this.changeData} />
        <input name="title" type="text"  onChange={this.changeData}/>
        <input name="body" type="text" onChange={this.changeData} />
        <input type="submit" />
      </form>


        {/* {
          this.state.posts.length ? this.state.posts.map(post=> <div> {post.id } </div>  )  : ""
        } */}
        <Navbar/> 
        <Route path="/" exact component={Home}  />
        <Route path="/compa" exact component={CompA} />
        <Route path="/compb" exact component={CompB} />
        <Route path="/postlist" exact component={PostList} />
        <Route path="/postlist/:id" exact component={Post} />
        </BrowserRouter>
      </div>
    );
  }
}
