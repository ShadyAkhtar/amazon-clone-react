import React from 'react'
import './Product.css';
import Product1 from './img/product/product1.jpg';

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>THe Lean stsrtup: Lorem ipsum dolor sit.</p>
      </div>
      <p className="product__price">
        <small>$</small>
        <strong>19.99</strong>
      </p>
      <div className="product__rating">
        <p>⭐</p>
      </div>
      <img src={Product1} alt="" />
      <button>Add to Basket</button>
    </div>
  )
}

export default Product
