import React, { useState, useRef, createContext, useEffect } from "react";




export default function App() {
const [user , setUser ] = useState()
  const refInput = useRef()

const count= useRef(0)

useEffect(() => {
  count.current = count.current +1
  // refInput.current.focus()
  // refInput.current.value = "xx"
  // console.log(refInput);
},[user])

  return (
      <div>
        <h1> HOOKS [useRef] </h1>
        <input  ref={refInput} type="text" onChange= {(e)=> setUser(e.target.value) } />
        <br/>
        {user}<br/>
        {count.current} 

      </div>
  );
}
