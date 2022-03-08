import React, { useContext } from 'react'
import {ProductContext} from "../App"
export default function Item() {
      // const context = useContext(ProductContext)
      const vl = useContext(ProductContext)
  return (
    <div>Item

        {vl}

        {/* <ProductContext.Consumer>
            {
                (value)=> <p> {value} {console.log(value)} </p>
            }
        </ProductContext.Consumer> */}



        {/* {props.product} */}
    </div>
  )
}
