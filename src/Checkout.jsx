import { ListItemAvatar } from '@material-ui/core';
import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import checkoutAd from './img/checkoutad.jpg';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';


function Checkout() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={checkoutAd} alt="" className="checkout__ad" />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* Checkout Product */}
          {basket.map(item => (
            <CheckoutProduct
            id={item.id} 
            title={item.title} 
            price={item.price}
            image={item.image} 
            rating={item.rating}
            />
          ))}

        </div>
      </div>

      <div className="checkout__right">
       <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
