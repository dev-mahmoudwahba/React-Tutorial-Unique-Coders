import React, { useState , useEffect } from "react";

function TestHcomp({ x, y }) {
  const [products, setProducts] = useState([
    { id: 1, name: "laptop1" },
    { id: 2, name: "laptop2" },
  ]);

  const [vl, setVl] = useState("");
  const addOneItem = () => {
    setProducts([...products, { id: 3, name: "laptop3" }]);
  };

  useEffect(() => {
      console.log("this is use effect ");
  })
  //  const { x ,y} = props  destruction
  //   const [product, setProduct] = useState("laptop");
  //   const changeValues = () => {
  //     setProduct("Mouse");
  //   };
  return (
    <div>
     
      <input type="text" onChange={(e)=> setVl(e.target.value)  } />
      <br />
      {vl}
      <button onClick={addOneItem}>add item</button>

      {products.map((prod) => (
        <div key={prod.id}> {prod.name} </div>
      ))}

      {/* <button onClick={() => setProduct("Mouse")} >  change </button> {product}  this is func Component {x} <br/>{y}   */}
    </div>
  );
}
export default TestHcomp;
