import React, { useState, createContext } from "react";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";

export const ProductContext = createContext();


export default function App() {
  const [product, setProduct] = useState("laptop");

  return (
    <ProductContext.Provider value={[1,2,4]}>
      <div>
        <h1> HOOKS [use context] </h1>
        <Sidebar  />
        <Widget  />
      </div>
    </ProductContext.Provider>
  );
}
