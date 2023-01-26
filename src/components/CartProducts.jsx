import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Navbar from './Navbar'
import Cart from './Cart'
const CartProducts = () => {
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <>
      <Navbar />
      <div class="table_avez ">

        <table class="sha" >
          <tr>
            <th>Product Name</th>
            <th class="tbord" >Quantity</th>
            <th>Total</th>
          </tr>
          {productsCount > 0 
            ? cart.items.map( (currentProduct, idx) => (
                <Cart  key={idx} id={currentProduct.id} quantity={currentProduct.quantity} />
              ))
            : <h1>There are no items in your cart!</h1>
          }
          <tr class="allcost" >
            <th>All total</th>
            <th class="thNone" >All total</th>
            <th>₹ {cart.getTotalCost().toFixed(2)}</th>
          </tr>

        </table>
        <div class="checkoutbtns">
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </>
  )
}

export default CartProducts