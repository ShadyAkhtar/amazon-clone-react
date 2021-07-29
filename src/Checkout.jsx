import React from 'react'
import './Checkout.css';
import checkoutAd from './img/checkoutad.jpg';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={checkoutAd} alt="" className="checkout__ad" />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>

      <div className="checkout__right">
       <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
