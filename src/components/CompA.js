import axios from "axios";
import React, { useState, useEffect } from "react";

// https://jsonplaceholder.typicode.com/posts
export default function CompA() {
  // const [count , setCount] = useState(0)
  const [post, setPost] = useState({});
    const [id , setId]  = useState(0)
  useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data)
      }).catch((err) => {
          console.log(err);
      })
  }, [id]);
  return (
    <div>
        <input type="text" value={id} onChange={(e)=> setId(e.target.value)} />
        {post.title}
        {/* {posts.map(post=> <div key={post.id}>{post.id } - {post.title } </div> )} */}

      {/* <button onClick={()=> setCount(count+ 1)} >increase</button> <br/>
        {count}
        <button onClick={()=> setCount(count-1)} >decraease</button> */}
    </div>
  );
}
