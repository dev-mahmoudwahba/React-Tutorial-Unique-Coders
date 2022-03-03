import React, { Component } from 'react'

 class List extends Component {
  render() {
    return (
      <div>
 {this.props.products.map((product,i)=>  <div key={product.id} > {product.id} {i} {product.title} </div>   )}

      </div>
    )
  }
}

export default List